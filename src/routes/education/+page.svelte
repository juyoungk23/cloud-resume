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

<div class="justify-center text-center my-20">
  <h1 class="text-3xl">Education</h1>
  {#each education as edu}
    <div class="card">
      <div class="card-body">
        <h5 class="text-lg">{edu.university}</h5>
        <h6 class="text-md">{edu.degree}</h6>
        <p class="text-sm">Graduated: {edu.graduationDate}</p>
      </div>
    </div>
  {/each}
</div>
