import { settingsNamespace } from "@deepseek-ai/dsh-settings"
import z from "@deepseek-ai/schemastery"

/**
 * Host half of the Helldivers 2 Democracy Terminal fan theme.
 * Owns one durable settings namespace (the toggle plus the theme
 * language) and injects the enabled/language flags into the index HTML
 * so the client half can decide whether and in which language to mount
 * the theme before its first settings read settles.
 */

const NS = settingsNamespace("hd2-terminal")

/** Durable theme settings; defaults to enabled with Simplified Chinese copy. */
const Schema = z.object({
  enabled: z.boolean().default(true),
  language: z.union([z.const("zh"), z.const("en")]).default("zh"),
})

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

export function apply(ctx) {
  ctx.inject(["settings"], (settingsCtx) => {
    settingsCtx.settings.register(NS, Schema, { applies: "live" })
  })
  ctx.inject(["webServer"], (httpCtx) => {
    httpCtx.effect(
      () => httpCtx.webServer.tapIndex((html) => injectBootFlag(html, readSettings(ctx))),
      "hd2-terminal: boot flag",
    )
  })
}
