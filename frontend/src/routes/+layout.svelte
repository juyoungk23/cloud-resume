<script>
import "../app.css";
</script>

<nav class="nav bg-wells-fargo-red">
  <div class="nav-links">
    <a href="#/">Home</a>
    <a href="#/experience">Experience</a>
    <a href="#/certifications">Certifications</a>
    <a href="#/education">Education</a>
    <a href="#/blog">Blog</a>
    <a href="#/about">About This Project</a>
  </div>
</nav>
<div class="content-container">
  <slot />
</div>

<style>
.nav {
  position: fixed; /* Fixed position */
  top: 0; /* Place the navbar at the top */
  width: 100%; /* Full width */
  background-color: #003a6b;
  padding: 1rem; /* Reduced padding */
}

.nav-links {
  display: flex;
  flex-wrap: wrap; /* Allows the links to wrap if they don't fit */
  justify-content: center; /* Center align links */
}

a {
  color: white; /* White text color */
  margin: 0 10px;
  padding: 0.25rem; /* Adding some padding for better appearance */
}

.content-container {
  padding-top: calc(4rem + 1.5rem); /* Adjusting padding-top dynamically */
}

/* Media Query for Mobile Devices */
@media only screen and (max-width: 768px) {
  .nav-links a {
    font-size: 0.875rem; /* Reducing font size for mobile */
  }
}
</style>
