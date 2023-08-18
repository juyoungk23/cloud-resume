

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/experience/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.471ccfb5.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.71095f26.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];
