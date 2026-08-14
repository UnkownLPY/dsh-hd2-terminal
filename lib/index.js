import { settingsNamespace } from "@deepseek-ai/dsh-settings"
import z from "@deepseek-ai/schemastery"

/**
 * Host half of the Helldivers 2 Democracy Terminal fan theme.
 * Owns one durable settings namespace (the toggle) and injects the
 * enabled flag into the index HTML so the client half can decide
 * whether to mount the theme before its first settings read settles.
 */

const NS = settingsNamespace("hd2-terminal")

/** Durable toggle schema; defaults to enabled. */
const Schema = z.object({
  enabled: z.boolean().default(true),
})

function injectBootFlag(html, enabled) {
  const script = `<script>window.__HD2_TERMINAL_ENABLED__=${enabled ? "true" : "false"}<\/script>`
  const body = /<body(?:\s[^>]*)?>/i.exec(html)
  if (body === null) return `${html}${script}`
  const at = body.index + body[0].length
  return `${html.slice(0, at)}${script}${html.slice(at)}`
}

function readEnabled(ctx) {
  const settings = ctx.get("settings")
  if (settings === undefined) return true
  const section = settings.get(NS)
  if (section === undefined) return true
  return section.enabled !== false
}

export function apply(ctx) {
  ctx.inject(["settings"], (settingsCtx) => {
    settingsCtx.settings.register(NS, Schema, { applies: "live" })
  })
  ctx.inject(["webServer"], (httpCtx) => {
    httpCtx.effect(
      () => httpCtx.webServer.tapIndex((html) => injectBootFlag(html, readEnabled(ctx))),
      "hd2-terminal: boot flag",
    )
  })
}
