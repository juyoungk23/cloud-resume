<div class="px-4 lg:px-80 mb-20 mt-10">
  <h1 class="text-center text-4xl my-2">About this Project</h1>
  <p class="intro-card">
    Welcome to the architectural overview of my Cloud Resume Challenge project.
    Below, you'll find a diagram that illustrates how different parts of the
    system interact with each other, along with a description of the
    technologies used.
  </p>

  <img
    src="/diagram.svg"
    alt="Cloud Resume Challenge Architecture Diagram"
    class="mx-auto my-10 p-10 w-full"
  />

  <h1 class="text-3xl my-4 font-bold">High Level Overview</h1>
  <p>
    This project incorporates several services offered by GCP. Combining a
    static frontend website with a highly-available and scalable backend, it
    demonstrates the essential capabilities of cloud technology.
  </p>
  <div class="section-break" />

  <h1 class="text-3xl my-4 font-bold">Run-Time Architecture</h1>
  <p>
    When the client first visits www.juyoungkim.dev, the traffic is routed to a
    Global HTTPS Cloud Load Balancer. The load balancer then determines where to
    send this traffic. First, to show the user the visit count of the website,
    the load balancer calls upon Cloud Run to retrieve the visitor count from
    Firestore.
  </p>
  <p>
    To serve the webpage, the load balancer sends the traffic to Cloud CDN,
    which checks if the cached data is valid. The cache invalidates and resets
    every 10 minutes. If valid, the webpage is served from an edge network,
    increasing delivery speed.
  </p>
  <p>
    If re-caching is required, Cloud CDN fetches the new website from Google
    Cloud Storage, where the website files are stored.
  </p>
  <div class="section-break" />
  <h1 class="text-3xl my-4 font-bold">Dev-Time Architecture</h1>
  <p>
    On the developer's side, when a change is pushed to the GitHub repository,
    several processes are triggered.
  </p>
  <p>
    First, the new code is mirrored in the Cloud Source Repository, creating a
    duplicate.
  </p>
  <p>
    Two Cloud Build triggers are activated. One monitors the "frontend" branch
    in GitHub, the other the "backend" branch in the Cloud Source Repository.
    Though not necessary to have two source controls, Cloud Source Repository
    has been implemented for demonstration purposes.
  </p>
  <p>
    The frontend Cloud Build trigger builds the new code into optimized files
    and copies them into a Google Cloud Storage bucket, from where they can be
    retrieved by Cloud CDN, if needed.
  </p>
  <p>
    The backend trigger packages the Python code (for retrieving visitor count)
    into a container, stored in the Artifact Registry, which is then deployed in
    Cloud Run for access by the Global HTTPS Cloud Load Balancer.
  </p>
  <div class="section-break" />
  <h1 class="text-3xl my-4 font-bold">Key Tradeoffs</h1>
  <p>
    Before the Cloud Resume Challenge, I had built a few projects using almost
    entirely Cloud functions. I could see that for a simple resume website such
    as this one, it would be easy to use the following architecture:
  </p>
  <ul class="list-inside list-disc px-4 lg:px-4">
    <li>Cloud Storage for static website files</li>
    <li>
      Serve the webpage directly from the default URL generated by Google Cloud
      Storage
    </li>
    <li>
      Cloud Function for retrieving visitor count directly from client to
      Firestore through HTTP request
    </li>
    <li>No Load Balancer, Caching, CI/CD</li>
  </ul>

  <p>
    In the spirit of the challenge, however, I decided to implement more cloud
    services. Yes, it did take more time to use a custom domain name, load
    balancer, CI/CD, etc, but it came with the benefits of security,
    availability, and scalability, all of which are core principles of cloud
    computing.
  </p>
  <p>
    Using Cloud Run to interface with Firestore provided a layer between the
    client and Firestore, allowing for more security.
  </p>
  <p>
    Although using Cloud Build and Artifact Registry came with a higher upfront
    cost of setting up, these CI/CD services made it very easy for me to push
    new changes and have it immediately and automatically reflected live.
  </p>
  <div class="section-break" />
  <h1 class="text-3xl my-4 font-bold">Next Steps</h1>
  <p>
    If I were to build upon this project further, I would explore swapping out
    Cloud Run with Google Kubernetes Engine.
  </p>
  <p>
    Making the backend app into a container would give me the benefit of
    rollbacks into previous versions, if deemed necessary. Although Kubernetes
    clusters would require more hands-on management, in the long run, they would
    allow me to better manage and integrate more complex technologies into this
    project.
  </p>
  <p>
    Another thing I would like to try is using Terraform to programmatically set
    up this website in an entirely new Google Cloud project.
  </p>
  <div class="section-break" />
  <h1 class="text-3xl my-4 font-bold">Lessons Learned</h1>
  <p>
    The Cloud Resume Challenge was a great opportunity for me to get my hands
    dirty with several new technologies that I hadn't used before.
  </p>
  <p>
    In particular, I enjoyed learning about Continuous Integration and
    Continuous Delivery (CI/CD) and seeing changes I made locally become live in
    an instant.
  </p>
  <p>
    If you would like to check out more projects I've made, please head over to <a
      href="/experience#personal"
      class="text-blue-500 underline hover:text-blue-700"
    >
      my experience page
    </a>
  </p>
  <div class="section-break" />
  <h2 class="text-3xl my-4 font-bold">Technologies Used</h2>
  <p class="text-xl my-4">
    Below is a list of technologies used in this project.
  </p>

  <ul class="list-inside list-disc px-4 lg:px-4">
    <li>SvelteKit, HTML, CSS, JavaScript</li>
    <li>Storage: Google Cloud Storage (GCS), Firestore (NoSQL database)</li>
    <li>Compute: Cloud Run (Serverless container-based compute)</li>
    <li>
      Networking: Cloud Domains, Cloud DNS, Global HTTPS Cloud Load Balancer,
      HTTPS, Cloud CDN
    </li>
    <li>Source Control: GitHub, Cloud Source Repositories (CSR)</li>
    <li>CI/CD: Cloud Build, Artifact Registry</li>
    <li>Process/Methodology: CI/CD, GitOps</li>
    <li>
      Communication: Documenting and diagramming architecture, Describing and
      justifying tradeoff decisions
    </li>
    <li>
      Personal Skills: Taking initiative, Self-motivating, Overcoming challenges
    </li>
  </ul>
</div>

<style>
p {
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin: 1.5rem 0;
}

.intro-card {
  background: #ffffff; /* white background */
  padding: 1.5rem; /* card padding */
  margin: 3rem 0; /* card margin */
  box-shadow: 60px 40px 64px rgba(0, 0, 0, 0.1); /* shadow effect */
  border-radius: 24px; /* optional: rounded corners */
}

/* Optional: Add a class for visual breaks between sections */
.section-break {
  border-bottom: 1px solid #ccc;
  margin: 2rem 0;
}
</style>
