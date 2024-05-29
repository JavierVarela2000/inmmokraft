import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.DR2c3Z_c.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.DksGCXQy.js","_app/immutable/chunks/index.DKBdAzNE.js","_app/immutable/chunks/entry.D2Evo9iy.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/stores.BTyZ1c3c.js"];
export const stylesheets = ["_app/immutable/assets/0.NVq2bW24.css"];
export const fonts = [];
