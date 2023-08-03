<script>
  let count = 0;
  const increment = () => {
    count += 2;
  };
</script>

<button on:click={increment}>
  count is {count}
</button>

<style>
  button {
    background-color: #ff3e00;
    color: white;
    border: none;
    border-radius: 0.25em;
    padding: 0.5em 1em;
    font-size: 1.25rem;
    font-weight: 700;
    cursor: pointer;
  }
</style>
