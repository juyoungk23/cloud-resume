<script>
  import Counter from './lib/Counter.svelte';
</script>

<main>
  <h1>Juyoung Kim</h1>

  <div class="contact-info">
    <p>Email: juyoung.kim@example.com</p>
    <!-- Replace with your email -->
    <p>Phone: (123) 456-7890</p>
    <!-- Replace with your phone number -->
    <p>
      LinkedIn: <a
        href="https://www.linkedin.com/in/juyoungkim/"
        target="_blank"
        rel="noopener noreferrer">juyoungkim</a
      >
    </p>
    <!-- Replace with your LinkedIn URL -->
  </div>

  <h2>Career Summary</h2>
  <p>Highly motivated Software Engineer with proven experience in XYZ...</p>
  <!-- Add your content -->

  <h2>Experience</h2>

  <h3>Professional</h3>

  <div class="experience">
    <div class="role">Software Engineer</div>
    <div class="company">Wells Fargo</div>
    <div class="date">July 2023 - Present</div>
  </div>

  <ul class="job-description">
    <li>Developed XYZ</li>
    <li>Implemented ABC</li>
  </ul>

  <div class="experience">
    <div class="role">Software Engineer Intern</div>
    <div class="company">Wells Fargo</div>
    <div class="date">Date Range</div>
    <!-- Add your content -->
  </div>

  <ul class="description">
    <li>Worked on XYZ</li>
    <li>Assisted in ABC</li>
  </ul>

  <h3>Projects</h3>
  <ul class="description">
    <li>Project 1</li>
    <li>Project 2</li>
  </ul>

  <h3>Open-Source</h3>
  <ul class="description">
    <li>Contribution 1</li>
    <li>Contribution 2</li>
  </ul>

  <h2>Certifications</h2>

  <h3>Google Cloud Platform</h3>
  <p>Associate Cloud Engineer</p>

  <h3>Microsoft Azure</h3>
  <p>AZ-900</p>

  <h2>Education</h2>
  <!-- Add your content -->

  <div class="card">
    <Counter />
  </div>
</main>

<style>
  .experience {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5em;
  }
  .role,
  .company,
  .date {
    flex-basis: 33.33%;
  }
  .contact-info p {
    margin-bottom: 0.2em;
  }
  .description {
    /* align text to the left */
    text-align: left;
  }
  h3 {
    margin-top: 1em;
  }
</style>
