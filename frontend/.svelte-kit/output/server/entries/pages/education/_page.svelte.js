import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let education = [
    {
      university: "The University of North Carolina at Chapel Hill",
      degree: "B.S. in Computer Science",
      graduationDate: "August 2019 - May 2023"
    }
  ];
  return `<div class="justify-center text-center my-20"><h1 class="text-3xl" data-svelte-h="svelte-m6cfhs">Education</h1> ${each(education, (edu) => {
    return `<div class="card"><div class="card-body"><h5 class="text-lg">${escape(edu.university)}</h5> <h6 class="text-md">${escape(edu.degree)}</h6> <p class="text-sm">Graduated: ${escape(edu.graduationDate)}</p></div> </div>`;
  })}</div>`;
});
export {
  Page as default
};
