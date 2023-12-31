import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let certifications = [
    {
      name: "Google Cloud Platform Associate Cloud Engineer",
      date: "2021-01-01",
      link: "https://www.credential.net/0b1b1d1e-5b7a-4b7e-9b1a-5b8b1b1b1b1b",
      image: "https://k21academy.com/wp-content/uploads/2020/12/GCP-ACE.png"
    },
    {
      name: "Google Cloud Platform Cloud Architect",
      date: "2021-01-01",
      link: "https://www.credential.net/0b1b1d1e-5b7a-4b7e-9b1a-5b8b1b1b1b1b",
      image: "https://passyourcert.net/wp-content/uploads/2021/12/badge-gcp-professional-cloud-architect.png"
    },
    {
      name: "Google Cloud Platform Digital Leader",
      date: "2021-01-01",
      link: "https://www.credential.net/0b1b1d1e-5b7a-4b7e-9b1a-5b8b1b1b1b1b",
      image: "https://blogs.sap.com/wp-content/uploads/2021/09/clouddigitalleader.png"
    },
    {
      name: "Microsoft AZ-900",
      date: "2021-01-01",
      link: "https://www.credential.net/0b1b1d1e-5b7a-4b7e-9b1a-5b8b1b1b1b1b",
      image: "https://miro.medium.com/v2/resize:fit:600/0*1CAzxuyWO_3vQ8sI.png"
    },
    {
      name: "Linux Certification",
      date: "2021-01-01",
      link: "https://www.credential.net/0b1b1d1e-5b7a-4b7e-9b1a-5b8b1b1b1b1b",
      image: "https://th.bing.com/th/id/OIP.HxHTACo3hWQ6XXB-7pix-AHaHa?pid=ImgDet&rs=1"
    }
  ];
  return `<h1 class="text-3xl text-center my-10" data-svelte-h="svelte-r1ajj8">Certifications</h1> <div class="container mx-auto">${each(certifications, (certification) => {
    return `<div class="flex bg-white shadow-2xl rounded p-6 mb-4"><img${add_attribute("src", certification.image, 0)}${add_attribute("alt", certification.name, 0)} class="w-24 h-24 object-cover mr-4"> <div><h5 class="text-2xl font-semibold">${escape(certification.name)}</h5> <h6 class="text-xl text-gray-600 mb-2">Date Obtained: ${escape(certification.date)}</h6> <a${add_attribute("href", certification.link, 0)} class="text-blue-500 underline hover:text-blue-700">Certification Link
        </a></div> </div>`;
  })}</div>`;
});
export {
  Page as default
};
