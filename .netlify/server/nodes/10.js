import * as server from '../entries/pages/dashboard/mision/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/mision/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/mision/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.BC0A0_u1.js","_app/immutable/chunks/scheduler.DksGCXQy.js","_app/immutable/chunks/index.DKBdAzNE.js","_app/immutable/chunks/FormLayout.DqfMm_vF.js","_app/immutable/chunks/Button.CxWhusi6.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/bundle-mjs.DWrLILi5.js","_app/immutable/chunks/Textarea.Bkviq4TO.js","_app/immutable/chunks/Wrapper.DRLI0ATK.js"];
export const stylesheets = [];
export const fonts = [];
