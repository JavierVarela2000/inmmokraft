import * as server from '../entries/pages/account/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/account/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.Cx_JvezP.js","_app/immutable/chunks/scheduler.DksGCXQy.js","_app/immutable/chunks/index.DKBdAzNE.js","_app/immutable/chunks/entry.D2Evo9iy.js"];
export const stylesheets = [];
export const fonts = [];
