

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/education/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.e4fd92a9.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.71095f26.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];
