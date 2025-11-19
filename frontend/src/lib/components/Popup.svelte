<script>
  import { createEventDispatcher, onDestroy } from 'svelte';

  export let message = "";
  export let type = "info";
  export let visible = false;

  const dispatch = createEventDispatcher();
  let timer;

  $: if (visible) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      dispatch('close');
    }, 3000);
  }

  function onKeydown(event) {
    if (event.key === 'Escape') {
      dispatch('close');
    }
  }

  onDestroy(() => {
    clearTimeout(timer);
  });
</script>

{#if visible}
  <div
    class="popup {type}"
    tabindex="0"
    role="alert"
    on:keydown={onKeydown}
  >
    {message}
  </div>
{/if}

<style>
  .popup {
    position: fixed;
    top: 1rem;
    right: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 6px;
    color: white;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    z-index: 9999;
    animation: fadein 0.3s ease forwards;
    outline: none;
  }
  .success {
    background-color: #4CAF50;
  }
  .error {
    background-color: #f44336;
  }
  .info {
    background-color: #2196F3;
  }

  @keyframes fadein {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>

