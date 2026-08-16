import { settingsNamespace } from "@deepseek-ai/dsh-settings"
import z from "@deepseek-ai/schemastery"

/**
 * Host half of the Helldivers 2 Democracy Terminal fan theme.
 *
 * Owns one durable settings namespace (the toggle plus the theme language)
 * and injects the enabled/language flags into the index HTML so the client
 * half can decide whether and in which language to mount the theme before
 * its first settings read settles.
 *
 * Browser access to those settings does NOT ride the api proxy: its
 * configuration plane only serves a fixed allowlist of in-box namespaces and
 * answers `settings-not-exposed` for everything else. The client half
 * therefore reads and writes the namespace through a plugin-owned web route
 * registered here, which talks to the settings service in-process.
 */

const NS = settingsNamespace("hd2-terminal")

/** Durable theme settings; defaults to enabled with Simplified Chinese copy. */
const Schema = z.object({
  enabled: z.boolean().default(true),
  language: z.union([z.const("zh"), z.const("en")]).default("zh"),
})

const SETTINGS_ROUTE = "/hd2-terminal/settings"

function injectBootFlag(html, settings) {
  const script = `<script>window.__HD2_TERMINAL_ENABLED__=${settings.enabled ? "true" : "false"};window.__HD2_TERMINAL_LANGUAGE__=${JSON.stringify(settings.language)}<\/script>`
  const body = /<body(?:\s[^>]*)?>/i.exec(html)
  if (body === null) return `${html}${script}`
  const at = body.index + body[0].length
  return `${html.slice(0, at)}${script}${html.slice(at)}`
}

function readSettings(ctx) {
  const settings = ctx.get("settings")
  if (settings === undefined) return { enabled: true, language: "zh" }
  const section = settings.get(NS)
  if (section === undefined) return { enabled: true, language: "zh" }
  return {
    enabled: section.enabled !== false,
    language: section.language === "en" ? "en" : "zh",
  }
}

function respondJson(res, status, body) {
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  })
  res.end(JSON.stringify(body))
}

/** Refuse explicit cross-origin callers; same-origin and no-Origin requests pass. */
function sameOrigin(req) {
  const origin = req.headers.origin
  if (origin === undefined) return true
  const host = req.headers.host
  if (host === undefined) return false
  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

async function readBody(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  return Buffer.concat(chunks).toString("utf8")
}

function snapshotOf(settings) {
  const descriptor = settings.describe().find((entry) => String(entry.ns) === String(NS))
  return {
    value: descriptor === undefined ? { enabled: true, language: "zh" } : descriptor.value,
    revision: descriptor === undefined ? 0 : descriptor.revision,
  }
}

/** GET returns the current section + revision; POST merges {enabled?, language?}. */
function settingsRoute(ctx) {
  return async (req, res) => {
    if (!sameOrigin(req)) return respondJson(res, 403, { ok: false, message: "cross-origin refused" })
    const settings = ctx.get("settings")
    if (settings === undefined) return respondJson(res, 503, { ok: false, message: "settings service unavailable" })
    if (req.method === "GET") {
      return respondJson(res, 200, { ok: true, ...snapshotOf(settings) })
    }
    if (req.method === "POST") {
      let body
      try {
        body = JSON.parse((await readBody(req)) || "{}")
      } catch {
        return respondJson(res, 400, { ok: false, message: "invalid JSON body" })
      }
      const patch = {}
      if (typeof body.enabled === "boolean") patch.enabled = body.enabled
      if (body.language === "zh" || body.language === "en") patch.language = body.language
      try {
        await settings.update(NS, patch, body.expectedRevision)
        return respondJson(res, 200, { ok: true, ...snapshotOf(settings) })
      } catch (error) {
        return respondJson(res, 409, {
          ok: false,
          conflict: true,
          message: error instanceof Error ? error.message : String(error),
        })
      }
    }
    return respondJson(res, 405, { ok: false, message: "method not allowed" })
  }
}

export function apply(ctx) {
  ctx.inject(["settings"], (settingsCtx) => {
    /**
     * Register the namespace, tolerating the patch hot-reload race: when a
     * loader update swaps this entry, the previous instance's fiber may still
     * own the registration while this fiber activates. The previous instance's
     * removal effect then deletes the namespace by name. A failed register
     * here therefore retries with backoff until this fiber wins the slot;
     * real registration failures (not duplicates) still fail loud.
     */
    let settled = false
    let timer = undefined
    const attempt = () => {
      try {
        settingsCtx.settings.register(NS, Schema, { applies: "live" })
        return true
      } catch (error) {
        if (error instanceof Error && error.message.includes("already registered")) return false
        throw error
      }
    }
    const schedule = (delay) => {
      timer = setTimeout(() => {
        if (settled) return
        if (attempt()) {
          settled = true
          return
        }
        schedule(Math.min(delay * 2, 5000))
      }, delay)
    }
    if (!attempt()) schedule(250)
    settingsCtx.effect(() => {
      return () => {
        settled = true
        if (timer !== undefined) clearTimeout(timer)
      }
    }, "hd2-terminal: settings registration")
  })
  ctx.inject(["webServer"], (httpCtx) => {
    httpCtx.effect(() => {
      const disposeTap = httpCtx.webServer.tapIndex((html) => injectBootFlag(html, readSettings(ctx)))
      const disposeRoute = httpCtx.webServer.register({
        kind: "prefix",
        path: SETTINGS_ROUTE,
        handler: settingsRoute(ctx),
      })
      return () => {
        disposeTap()
        disposeRoute()
      }
    }, "hd2-terminal: boot flag + settings route")
  })
}
