import * as server from '../entries/pages/dashboard/provincias/_id_/_page.server.ts.js';

export const index = 19;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/provincias/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/provincias/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/19.BScGcVhx.js","_app/immutable/chunks/scheduler.DksGCXQy.js","_app/immutable/chunks/await_block.CozfDRjU.js","_app/immutable/chunks/index.DKBdAzNE.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/stores.BTyZ1c3c.js","_app/immutable/chunks/entry.D2Evo9iy.js","_app/immutable/chunks/forms.DeVzLlmE.js","_app/immutable/chunks/Button.CxWhusi6.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/bundle-mjs.DWrLILi5.js","_app/immutable/chunks/Input.HvwLyJ_v.js","_app/immutable/chunks/Wrapper.DRLI0ATK.js","_app/immutable/chunks/Spinner.D1L39hu4.js","_app/immutable/chunks/FormLayout.DqfMm_vF.js"];
export const stylesheets = [];
export const fonts = [];
