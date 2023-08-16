

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.22a6ee43.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.71095f26.js","_app/immutable/chunks/singletons.c2e5934a.js"];
export const stylesheets = [];
export const fonts = [];
