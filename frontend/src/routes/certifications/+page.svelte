<script>
  let gcpCertifications = [
    {
      name: "Google Cloud Certified Associate Cloud Engineer",
      date: "2023-09-07",
      link: "https://www.credly.com/badges/df7949d3-52aa-4c4b-8f34-512dc7be63f0",
      image: "GCP-ACE.png",
      // image: "https://k21academy.com/wp-content/uploads/2020/12/GCP-ACE.png",
    },
    {
      name: "Google Cloud Certified Professional Cloud Architect",
      date: "2023-12-28",
      link: "https://www.credly.com/badges/20713387-7c88-4fe5-a974-0eed36115f13",
      image:
        "https://passyourcert.net/wp-content/uploads/2021/12/badge-gcp-professional-cloud-architect.png",
    },
  ];
  let azureCertifications = [
    {
      name: "Microsoft AZ-900",
      date: "2021-01-01",
      link: "https://www.credential.net/0b1b1d1e-5b7a-4b7e-9b1a-5b8b1b1b1b1b",
      image: "https://miro.medium.com/v2/resize:fit:600/0*1CAzxuyWO_3vQ8sI.png",
    },
  ];
  let linuxCertifications = [
    {
      name: "Linux Certification",
      date: "2021-01-01",
      link: "https://www.credential.net/0b1b1d1e-5b7a-4b7e-9b1a-5b8b1b1b1b1b",
      image:
        "https://th.bing.com/th/id/OIP.HxHTACo3hWQ6XXB-7pix-AHaHa?pid=ImgDet&rs=1",
    },
  ];
</script>

<h1 class="text-4xl text-center my-10">Certifications</h1>
<div class="container mx-auto">
  <div class="cert-container">
    <!-- <img
      src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
      alt="Google Cloud Logo"
      class="w-48 h-48 mx-auto"
    /> -->
    <img
      src="/Google_G_Logo.svg"
      alt="Google Cloud Logo"
      class="w-28 h-28 mx-auto"
    />
    {#each gcpCertifications as certification}
      <div class="shadow-container">
        <div class="certification-card flex">
          <img
            src={certification.image}
            alt={certification.name}
            class="w-28 h-28 object-cover mr-4"
          />
          <div>
            <h5 class="text-xl font-semibold">{certification.name}</h5>
            <h6 class="text-lg text-gray-600 mb-2">
              Date Obtained: {certification.date}
            </h6>
            <a
              href={certification.link}
              class="text-blue-500 underline hover:text-blue-700"
              target="_blank"
            >
              Certification Link
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
  <!-- <div class="cert-container">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
      alt="Microsoft Azure Logo"
      class="w-48 h-48 mx-auto"
    />
    {#each azureCertifications as certification}
      <div class="shadow-container">
        <div class="certification-card flex">
          <img
            src={certification.image}
            alt={certification.name}
            class="w-24 h-24 object-cover mr-4"
          />
          <div>
            <h5 class="text-2xl font-semibold">{certification.name}</h5>
            <h6 class="text-xl text-gray-600 mb-2">
              Date Obtained: {certification.date}
            </h6>
            <a
              href={certification.link}
              class="text-blue-500 underline hover:text-blue-700"
              target="_blank"
            >
              Certification Link
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="cert-container">
    <img
      src="https://www.vectorlogo.zone/logos/linux/linux-icon.svg"
      alt="Linux Logo"
      class="w-48 h-48 mx-auto"
    />
    {#each linuxCertifications as certification}
      <div class="shadow-container">
        <div class="certification-card flex">
          <img
            src={certification.image}
            alt={certification.name}
            class="w-24 h-24 object-cover mr-4"
          />
          <div>
            <h5 class="text-2xl font-semibold">{certification.name}</h5>
            <h6 class="text-xl text-gray-600 mb-2">
              Date Obtained: {certification.date}
            </h6>
            <a
              href={certification.link}
              class="text-blue-500 underline hover:text-blue-700"
              target="_blank"
            >
              Certification Link
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div> -->
</div>

<style>
  .shadow-container {
    /* background: #ffffff; */
    background-color: rgb(247, 244, 242);
    padding: 20px;
    padding-top: 30px;
    padding-bottom: 30px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    max-width: 50%;
    box-shadow: 60px 40px 64px rgba(0, 0, 0, 0.1); /* shadow effect */
    border-radius: 24px; /* optional: rounded corners */
  }

  .certification-card {
    flex-direction: row; /* default: image on the left */
  }

  @media (max-width: 768px) {
    .shadow-container {
      max-width: 90%; /* increase width for smaller screens */
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .certification-card {
      flex-direction: column; /* image on the top */
      align-items: center; /* center alignment */
    }

    .certification-card img {
      width: 100px; /* appropriate size for mobile */
      height: 100px; /* appropriate size for mobile */
      margin-right: 0; /* no right margin needed */
      margin-bottom: 20px; /* add bottom margin */
    }

    .certification-card h5 {
      font-size: 1.5rem; /* reduce font size for mobile */
    }

    .certification-card h6 {
      font-size: 1rem; /* reduce font size for mobile */
    }
  }
</style>
