import * as server from '../entries/pages/login/_page.server.ts.js';

export const index = 21;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.ts";
export const imports = ["_app/immutable/nodes/21.DWNgQBTy.js","_app/immutable/chunks/scheduler.DksGCXQy.js","_app/immutable/chunks/index.DKBdAzNE.js","_app/immutable/chunks/entry.D2Evo9iy.js"];
export const stylesheets = [];
export const fonts = [];
