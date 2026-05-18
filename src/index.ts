/**
 * @amlplugins/together-chat
 *
 * Thin namespaced re-export of the native together-ai SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Together AI Chat — 200+ open-source LLMs (Llama, Mixtral, DeepSeek, Qwen, Gemma) with streaming and tool use.
 */

import * as _sdk from "together-ai";
export * from "together-ai";
export { _sdk as sdk };
export default _sdk;
