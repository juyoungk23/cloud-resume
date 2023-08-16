import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let professionalExperiences = [
    {
      title: "Software Engineer",
      date: "July 2023 - Present",
      company: "Wells Fargo, San Francisco, CA",
      responsibilities: [
        "Created and maintained a working connection between Python, Teradata, and MongoDB.",
        "Used big, enterprise-level databases technologies such as Teradata and Informatica.",
        "Used AutoSys to schedule jobs."
      ]
    },
    {
      title: "Software Engineering Intern",
      date: "June 2022 – August 2022",
      company: "Wells Fargo, Charlotte, NC",
      responsibilities: [
        "Developed a real-time dashboard and notification system for the developer team to monitor loan application statuses.",
        "Received a Shared Success Corporate Recognition for Learning and Growing from my team during the internship."
      ]
    },
    {
      title: "Operations Consultant",
      date: "December 2020 – Present",
      company: "Shiplify, Atlanta, GA",
      responsibilities: [
        "Provide accurate locational information for LTL shipment companies to optimize operations and minimize revenue loss.",
        "Rapidly advanced through 3 promotions to join the Data Quality Task Force, responsible for ensuring data accuracy and integrity by cleaning up data from lower teams."
      ]
    }
  ];
  let personalProjects = [
    {
      title: "Cloud Resume Challenge",
      date: "August 2023",
      description: "Hosting a personal resume website on GCP using Cloud Storage, Cloud Run, and Cloud Build. (GCP, Cloud Storage, Cloud Run, Cloud Build)",
      repo: "https://github.com/juyoungk23/cloud-resume"
    },
    {
      title: "Augmented Reality Geolocated Forums (In Development)",
      date: "August 2022 - Present",
      description: "Developing an application to enable college students to communicate via geolocated forums using augmented reality. (Unity, C#, XCode, Basic Game Development)",
      repo: "https://www.google.com"
    },
    {
      title: "Customer Service AI Phone Voice Assistant (In Development)",
      date: "April 2023 - Present",
      description: "Creating an AI voice assistant that leverages NLP to help inquiring customers have a seamless experience with small businesses, with the ability to route calls to human representatives for more in-depth assistance. (Python, Flask IO, NLP, Twilio API, Google API)",
      repo: "https://www.google.com"
    },
    {
      title: "Personal Home Assistant",
      date: "January 2023 - Present",
      description: "Developing a personal home assistant inspired by JARVIS from Iron Man, capable of providing news updates, playing music, launching apps, tracking finances, playing YouTube videos, and notifying weather forecasts. (Python, Flask IO, NLP, Google, Spotify, and other integrations)",
      repo: "https://www.google.com"
    },
    {
      title: "Cloud Journal",
      date: "August 2023",
      description: "An on-the-go journal to jot down thoughts and goals wherever you go. Designed for personal use, this journal is hosted on the cloud and can periodically send emails with past thoughts, reminding of past thoughts and showing how they change over time. It also performs word frequency analysis on goals and displays a barplot for viewing. (Cloud, Email Integration)",
      repo: "https://github.com/juyoungk23/personal-site"
    }
  ];
  return `<nav class="m-5" data-svelte-h="svelte-uvzrug"><a href="#professional" class="text-lg text-blue-700">Professional Experience</a>
  |
  <a href="#personal" class="text-lg text-blue-700">Personal Projects</a></nav> <h1 id="professional" class="text-4xl text-center my-20" data-svelte-h="svelte-1cg54v9">Professional Experience</h1> <div class="container mx-auto">${each(professionalExperiences, (experience) => {
    return `<div class="bg-white shadow-sm rounded p-6 mb-20"><h5 class="text-2xl font-semibold">${escape(experience.title)}</h5> <h6 class="text-xl text-gray-600">${escape(experience.date)}</h6> <h6 class="text-lg font-medium">${escape(experience.company)}</h6> <ul class="list-inside list-disc mt-2 text-lg">${each(experience.responsibilities, (responsibility) => {
      return `<li>${escape(responsibility)}</li>`;
    })}</ul> </div>`;
  })}</div> <h1 id="personal" class="text-4xl text-center my-20" data-svelte-h="svelte-138llun">Personal Projects</h1> <div class="container mx-auto">${each(personalProjects, (project) => {
    return ` <div class="bg-white shadow-sm rounded p-6 mb-20"><h5 class="text-2xl font-semibold">${escape(project.title)}</h5> <h6 class="text-xl text-gray-600 mb-2">${escape(project.date)}</h6> <p class="text-lg">${escape(project.description)}</p> <div class="flex items-center"><img src="/github-logo.svg" alt="GitHub Logo" class="w-8 h-8 m-2"> <a${add_attribute("href", project.repo, 0)} class="text-blue-500 underline hover:text-blue-700" target="_blank">Repository Link
        </a></div> </div>`;
  })}</div>`;
});
export {
  Page as default
};
