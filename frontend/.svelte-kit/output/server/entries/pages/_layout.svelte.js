import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sticky-nav.svelte-12aw1ol{position:fixed;top:0;width:100%}.content-container.svelte-12aw1ol{padding-top:4rem}a.svelte-12aw1ol{color:white;margin:0 10px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="p-5 bg-slate-500 sticky-nav svelte-12aw1ol" data-svelte-h="svelte-ut8drx"><a href="/" class="svelte-12aw1ol">Home</a> <a href="/experience" class="svelte-12aw1ol">Experience</a> <a href="/certifications" class="svelte-12aw1ol">Certifications</a> <a href="/education" class="svelte-12aw1ol">Education</a> <a href="/blog" class="svelte-12aw1ol">Blog</a> <a href="/about" class="svelte-12aw1ol">About This Project</a></nav> <div class="content-container svelte-12aw1ol">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Layout as default
};
