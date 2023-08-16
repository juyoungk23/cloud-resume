<script>
import "../app.css";
</script>

<nav class="p-5 bg-slate-500 sticky-nav">
  <a href="/">Home</a>
  <a href="/experience">Experience</a>
  <a href="/certifications">Certifications</a>
  <a href="/education">Education</a>
  <a href="/blog">Blog</a>
</nav>
<div class="content-container">
  <slot />
</div>

<style>
.sticky-nav {
  position: fixed; /* Fixed position */
  top: 0; /* Place the navbar at the top */
  width: 100%; /* Full width */
}

.content-container {
  padding-top: 4rem;
}

a {
  color: white;
  margin: 0 10px;
}
</style>
