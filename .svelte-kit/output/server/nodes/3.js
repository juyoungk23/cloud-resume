

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.187b319c.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.71095f26.js"];
export const stylesheets = [];
export const fonts = [];
