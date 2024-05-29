import * as server from '../entries/pages/dashboard/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.BMfKw_aO.js","_app/immutable/chunks/scheduler.DksGCXQy.js","_app/immutable/chunks/index.DKBdAzNE.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/bundle-mjs.DWrLILi5.js","_app/immutable/chunks/stores.BTyZ1c3c.js","_app/immutable/chunks/entry.D2Evo9iy.js"];
export const stylesheets = [];
export const fonts = [];
