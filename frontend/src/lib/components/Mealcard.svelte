<script>
  import { createEventDispatcher } from 'svelte';
  export let meal;
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('select');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }
</script>

<div
  class="flex items-center justify-between bg-white rounded-md shadow-sm border px-4 py-2 hover:bg-gray-50 transition cursor-pointer"
  role="button"
  tabindex="0"
  on:click={handleClick}
  on:keydown={handleKeyDown}
  aria-label={`View details for ${meal.name}`}
>
  <div class="flex items-center gap-4">
    <img src={meal.image} alt={meal.name} class="w-16 h-16 rounded object-cover" />
    <div class="flex flex-col text-sm">
      <div class="font-semibold text-gray-800">KCALS: {meal.kcals}</div>
      <div class="text-gray-500">Eaten at: {new Date(meal.eatenAt).toLocaleString()}</div>
    </div>
  </div>
  <div class="text-xl text-gray-400">&rsaquo;</div>
</div>

