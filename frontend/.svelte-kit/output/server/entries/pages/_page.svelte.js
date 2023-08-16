import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
let count = 0;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="my-20 text-center content-center"><h1 class="text-5xl my-3" data-svelte-h="svelte-158mb80">Juyoung Kim</h1> <h3 class="text-lg">${escape(count)} people have viewed this website!</h3></div> <div class="text-center" data-svelte-h="svelte-1c7aoxc"><a href="https://www.linkedin.com/in/juyoung-kim-2023/" target="_blank">LinkedIn</a></div> <div class="text-center my-10" data-svelte-h="svelte-wqztt6">This website follows the
  <a href="https://www.pluralsight.com/resources/blog/cloud/cloudguruchallenge-your-resume-on-gcp" target="_blank" class="text-blue-400">GCP Cloud Resume Challenge</a>!</div>`;
});
export {
  Page as default
};
