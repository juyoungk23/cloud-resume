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

<h1 class="text-3xl text-center my-10">Education</h1>
<div class="justify-center text-center my-10 shadow-container">
  {#each education as edu}
    <div class="card">
      <div class="mx-5 flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/North_Carolina_Tar_Heels_logo.svg/2560px-North_Carolina_Tar_Heels_logo.svg.png"
          alt="UNC Logo"
          class="w-24 h-20 m-5"
        />
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
  border-radius: 20px;
  background: #ffffff;
  padding: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  margin: auto;
  margin-top: 80px;
  margin-bottom: 100px;
  max-width: 550px;
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
