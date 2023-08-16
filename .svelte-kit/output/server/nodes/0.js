import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.7c4f6cdf.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.71095f26.js"];
export const stylesheets = ["_app/immutable/assets/0.57162cfb.css"];
export const fonts = [];
