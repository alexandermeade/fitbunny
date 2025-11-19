<script>
  import { onMount } from 'svelte';
  let html = '';    // store the HTML string here
  let error = '';   // store error message here

  onMount(async () => {
    try {
      const res = await fetch('http://localhost:8080/JWT');
      if (!res.ok) throw new Error('API error');
      html = await res.text();  // get raw HTML string
    } catch (err) {
      error = err.message;
    }
  });
</script>

{#if error}
  <p>Error: {error}</p>
{:else if !html}
  <p>Loading...</p>
{:else}
  {@html html}  <!-- render the fetched HTML -->
{/if}

