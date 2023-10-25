<script>
  let education = [
    {
      university: "The University of North Carolina at Chapel Hill",
      degree: "B.S. in Computer Science",
      graduationDate: "August 2019 - May 2023",
    },
    // You can add more entries if you have other degrees or attended other universities
  ];
</script>

<h1 class="text-4xl text-center my-10">Education</h1>
<img
  src="/UNC-tarheels-white.svg"
  alt="Google Cloud Logo"
  class="w-64 mx-auto pt-10"
/>
<div class="justify-center text-center my-10 shadow-container">
  {#each education as edu}
    <div class="card">
      <div class="mx-5 flex">
        <!-- <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/North_Carolina_Tar_Heels_logo.svg/2560px-North_Carolina_Tar_Heels_logo.svg.png"
          alt="UNC Logo"
          class="w-24 h-20 m-5"
        /> -->
        <img src="/UNC.svg" alt="UNC Logo" class="w-64 h-20 m-5" />
        <div>
          <h5 class="text-xl">{edu.university}</h5>
          <h6 class="text-lg">{edu.degree}</h6>
          <p class="text-md">Graduated: {edu.graduationDate}</p>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .shadow-container {
    /* background: #ffffff; */
    background-color: rgb(247, 244, 242);
    padding: 20px;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 100px;
    max-width: 40%;
    padding-top: 30px;
    padding-bottom: 30px;
    box-shadow: 60px 40px 64px rgba(0, 0, 0, 0.1); /* shadow effect */
    border-radius: 24px; /* optional: rounded corners */
  }

  .card {
    padding: 10px;
  }

  @media (max-width: 768px) {
    .shadow-container {
      max-width: 90%; /* take up 90% of the screen width */
      margin-top: 40px; /* reduce top margin */
      padding: 15px;
    }

    .card .flex {
      flex-direction: column; /* stack content vertically */
      align-items: center; /* center items */
    }

    .card img {
      margin: 15px 0; /* adjust margin for vertical layout */
    }
  }
</style>
