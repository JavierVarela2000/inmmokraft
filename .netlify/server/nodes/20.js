import * as server from '../entries/pages/dashboard/vision/_page.server.ts.js';

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/vision/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/vision/+page.server.ts";
export const imports = ["_app/immutable/nodes/20.DwQAxFw-.js","_app/immutable/chunks/scheduler.DksGCXQy.js","_app/immutable/chunks/index.DKBdAzNE.js","_app/immutable/chunks/FormLayout.DqfMm_vF.js","_app/immutable/chunks/Button.CxWhusi6.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/bundle-mjs.DWrLILi5.js","_app/immutable/chunks/Textarea.Bkviq4TO.js","_app/immutable/chunks/Wrapper.DRLI0ATK.js","_app/immutable/chunks/Spinner.D1L39hu4.js"];
export const stylesheets = [];
export const fonts = [];
