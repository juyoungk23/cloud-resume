<script>
import { onMount } from "svelte";

let count = 0;

onMount(async () => {
  try {
    const response = await fetch(
      "https://cloud-resume-backend-j4vk2vgrha-wl.a.run.app/api/visitor-count",
    );
    const data = await response.json();
    count = data.count; // Adjust based on the actual response structure
  } catch (error) {
    console.error("Error fetching visitor count:", error);
  }
});
</script>

<div class="mt-20 container">
  <!-- Name and Visitor Count Box -->
  <div class="shadow-box my-20 text-center content-center">
    <h1 class="text-5xl my-3">Juyoung Kim</h1>
    <h3 class="text-lg">{count} people have viewed this website!</h3>
  </div>

  <!-- Social Links Boxes -->
  <div
    class="shadow-box flex flex-row justify-center items-center space-y-0 space-x-3"
  >
    <a
      href="https://www.linkedin.com/in/juyoung-kim-2023/"
      target="_blank"
      class="flex items-center"
      ><img
        src="/linkedin.svg"
        alt="LinkedIn Logo"
        class="w-8 h-8 mx-1"
      />LinkedIn</a
    >

    <a
      href="https://github.com/juyoungk23"
      target="_blank"
      class="flex items-center"
    >
      <img src="/github.svg" alt="GitHub Logo" class="w-8 h-8 mx-1" />GitHub</a
    >

    <a
      href="https://www.instagram.com/juyoung.kim"
      target="_blank"
      class="flex items-center"
    >
      <img
        src="/instagram.svg"
        alt="Instagram Logo"
        class="w-8 h-8 mx-1"
      />Instagram</a
    >
  </div>

  <!-- Challenge Link Box -->
  <div class="shadow-box text-center my-10">
    This website follows the
    <a
      href="https://www.pluralsight.com/resources/blog/cloud/cloudguruchallenge-your-resume-on-gcp"
      target="_blank"
      class="text-blue-400">GCP Cloud Resume Challenge</a
    >!
  </div>
</div>

<style>
.container {
  width: 100%;
  max-width: 1100px; /* or whatever the maximum width you want */
  margin: 0 auto; /* center the container */
  padding: 0 20px; /* some padding on the sides */
  margin-top: 150px;
}
.shadow-box {
  padding: 15px;
  margin: 10px;
  background-color: white;
  max-width: 550px;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 20px;
  box-shadow: 60px 40px 64px rgba(0, 0, 0, 0.1); /* shadow effect */
  border-radius: 24px; /* optional: rounded corners */
  box-sizing: border-box; /* makes padding included in the width */
}

/* Media query for small screens */
@media (max-width: 768px) {
  .shadow-box {
    max-width: 100%; /* allows the boxes to be full width on small screens */
    padding: 15px; /* reduce padding */
    box-shadow: 30px 20px 32px rgba(0, 0, 0, 0.1); /* reduce shadow */
  }
  .shadow-box a {
    padding: 0px; /* adjust as needed */
  }
}
</style>
