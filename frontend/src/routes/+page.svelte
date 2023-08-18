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

<div class="mt-20">
  <!-- Name and Visitor Count Box -->
  <div class="shadow-box my-20 text-center content-center">
    <h1 class="text-5xl my-3">Juyoung Kim</h1>
    <h3 class="text-lg">{count} people have viewed this website!</h3>
  </div>

  <!-- Social Links Boxes -->
  <div
    class="shadow-box flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-3"
  >
    <div class="flex space-x-2 items-center">
      <img src="/linkedin.svg" alt="LinkedIn Logo" class="w-8 h-8" />
      <a href="https://www.linkedin.com/in/juyoung-kim-2023/" target="_blank"
        >LinkedIn</a
      >
    </div>
    <div class="flex space-x-2 items-center">
      <img src="/github.svg" alt="GitHub Logo" class="w-8 h-8" />
      <a href="https://github.com/juyoungk23" target="_blank">GitHub</a>
    </div>
    <div class="flex space-x-2 items-center">
      <img src="/instagram.svg" alt="Instagram Logo" class="w-8 h-8" />
      <a href="https://www.instagram.com/juyoung.kim" target="_blank"
        >Instagram</a
      >
    </div>
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
.shadow-box {
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  margin: 10px;
  background-color: white;
  max-width: 550px;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 20px;
}
</style>
