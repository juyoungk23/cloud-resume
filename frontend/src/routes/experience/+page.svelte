<script>
  let professionalExperiences = [
    {
      title: "Software Engineer",
      date: "July 2023 - Present",
      company: "Wells Fargo, San Francisco, CA",
      responsibilities: [
        "Created and maintained a working connection between Python, Teradata, and MongoDB.",
        "Used big, enterprise-level databases technologies such as Teradata and Informatica.",
        "Used AutoSys to schedule jobs.",
      ],
    },
    {
      title: "Software Engineering Intern",
      date: "June 2022 – August 2022",
      company: "Wells Fargo, Charlotte, NC",
      responsibilities: [
        "Developed a real-time dashboard and notification system for the developer team to monitor loan application statuses.",
        "Received a Shared Success Corporate Recognition for Learning and Growing from my team during the internship.",
      ],
    },
    {
      title: "Operations Consultant",
      date: "December 2020 – Present",
      company: "Shiplify, Atlanta, GA",
      responsibilities: [
        "Provide accurate locational information for LTL shipment companies to optimize operations and minimize revenue loss.",
        "Rapidly advanced through 3 promotions to join the Data Quality Task Force, responsible for ensuring data accuracy and integrity by cleaning up data from lower teams.",
      ],
    },
  ];

  let personalProjects = [
    {
      title: "Cloud Resume Challenge",
      date: "August 2023",
      description:
        "Hosting a personal resume website on GCP using Cloud Storage, Cloud Run, and Cloud Build. (GCP, Cloud Storage, Cloud Run, Cloud Build)",
      repo: "https://github.com/juyoungk23/cloud-resume",
    },
    {
      title: "Augmented Reality Geolocated Forums (In Development)",
      date: "August 2022 - Present",
      description:
        "Developing an application to enable college students to communicate via geolocated forums using augmented reality. (Unity, C#, XCode, Basic Game Development)",
      repo: "https://www.google.com",
    },
    {
      title: "Customer Service AI Phone Voice Assistant (In Development)",
      date: "April 2023 - Present",
      description:
        "Creating an AI voice assistant that leverages NLP to help inquiring customers have a seamless experience with small businesses, with the ability to route calls to human representatives for more in-depth assistance. (Python, Flask IO, NLP, Twilio API, Google API)",
      repo: "https://www.google.com",
    },
    {
      title: "Personal Home Assistant",
      date: "January 2023 - Present",
      description:
        "Developing a personal home assistant inspired by JARVIS from Iron Man, capable of providing news updates, playing music, launching apps, tracking finances, playing YouTube videos, and notifying weather forecasts. (Python, Flask IO, NLP, Google, Spotify, and other integrations)",
      repo: "https://www.google.com",
    },
    {
      title: "Cloud Journal",
      date: "August 2023",
      description:
        "An on-the-go journal to jot down thoughts and goals wherever you go. Designed for personal use, this journal is hosted on the cloud and can periodically send emails with past thoughts, reminding of past thoughts and showing how they change over time. It also performs word frequency analysis on goals and displays a barplot for viewing. (Cloud, Email Integration)",
      repo: "https://github.com/juyoungk23/personal-site",
    },
  ];
</script>

<nav class="text-center my-3 shadow-container-links">
  <a href="#professional" class="text-md sm:text-lg text-blue-700"
    >Professional Experience</a
  >
  |
  <a href="#personal" class="text-md sm:text-lg text-blue-700"
    >Personal Projects</a
  >
</nav>

<h1 id="professional" class="text-3xl sm:text-4xl text-center my-10">
  Professional Experience
</h1>
<div class="container mx-auto shadow-container">
  {#each professionalExperiences as experience, index}
    <div
      class="p-4 sm:p-6 {index !== professionalExperiences.length - 1
        ? 'border-b'
        : ''}"
    >
      <h5 class="text-xl sm:text-2xl font-bold">{experience.title}</h5>
      <h6 class="text-lg sm:text-xl text-gray-600">{experience.date}</h6>
      <h6 class="text-md sm:text-lg font-medium">{experience.company}</h6>
      <ul class="list-inside list-disc mt-2 text-md sm:text-lg">
        {#each experience.responsibilities as responsibility}
          <li>{responsibility}</li>
        {/each}
      </ul>
    </div>
  {/each}
</div>
<h1 id="personal" class="text-3xl sm:text-4xl text-center my-10">
  Personal Projects
</h1>
<div class="container mx-auto shadow-container">
  {#each personalProjects as project, index}
    <div
      class="p-4 sm:p-6 {index !== personalProjects.length - 1
        ? 'border-b'
        : ''}"
    >
      <h5 class="text-xl sm:text-2xl font-bold">{project.title}</h5>
      <h6 class="text-lg sm:text-xl text-gray-600 mb-2">{project.date}</h6>
      <p class="text-md sm:text-lg">{project.description}</p>
      <div class="flex items-center">
        <img
          src="/github-logo.svg"
          alt="GitHub Logo"
          class="w-6 sm:w-8 h-6 sm:h-8 m-1 sm:m-2"
        />
        <a
          href={project.repo}
          class="text-blue-500 underline hover:text-blue-700"
          target="_blank"
        >
          Repository Link
        </a>
      </div>
    </div>
  {/each}
</div>

<style>
  .shadow-container,
  .shadow-container-links {
    /* background: #ffffff */
    background-color: rgb(247, 244, 242);
    box-shadow: 60px 40px 64px rgba(0, 0, 0, 0.1); /* shadow effect */
    border-radius: 24px; /* rounded corners */
    max-width: 90%; /* adjust for mobile */
    margin: auto; /* centers the container */
  }

  .shadow-container {
    padding: 15px;
    margin-top: 20px;
    margin-bottom: 60px;
  }

  .shadow-container-links {
    padding: 5px;
    margin-top: 10px; /* additional top margin for mobile */
  }

  /* Styles for screens larger than 768px */
  @media (min-width: 768px) {
    .shadow-container,
    .shadow-container-links {
      padding: 10px;
      max-width: 800px; /* adjust as needed for desktop */
    }

    .shadow-container {
      margin-top: 40px; /* larger top margin for bigger screens */
    }
  }
</style>
