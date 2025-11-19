<script>
  export let meal;
  export let onClose = () => {};
  const formatDate = (d) => new Date(d).toLocaleString();
</script>

{#if meal}
  <div
    class="fixed inset-0 flex items-center justify-center z-50 p-4 overflow-auto"
    style="background-color: rgba(255, 255, 255, 0.3); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);"
    on:click={onClose}
    role="dialog"
    aria-modal="true"
    aria-labelledby="meal-detail-title"
  >
    <div
      class="bg-white rounded-lg max-w-3xl w-full p-6"
      on:click|stopPropagation
    >
      <button
        on:click={onClose}
        aria-label="Close meal detail"
        class="mb-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
      >
        &times;
      </button>

      <div class="flex flex-col md:flex-row gap-6">
        <img
          src={meal.image}
          alt={meal.name}
          class="w-full  rounded object-contain"
       />
        <div class="flex flex-col justify-start gap-2">
          <h2 id="meal-detail-title" class="text-2xl font-semibold">{meal.name}</h2>
          <p class="text-gray-700">{meal.description}</p>
          <p class="text-gray-600">Eaten at: {formatDate(meal.eatenAt)}</p>
          <p class="font-semibold mt-4">Ingredients:</p>

          {#if meal.ingredients.length > 0}
            <div class="grid grid-cols-1 gap-3 mt-2 max-h-64 overflow-auto">
              {#each meal.ingredients as ing}
                <div class="flex items-center justify-between bg-gray-100 rounded-md px-4 py-2">
                  <div class="flex items-center gap-3">
                    <img src={ing.image} alt={ing.name} class="w-12 h-12 rounded object-cover" />
                    <div>
                      <div class="font-semibold">{ing.name}</div>
                      <div class="text-sm text-gray-600">KCALS: {ing.kcals}</div>
                      <div class="text-xs text-gray-500">Eaten at: {formatDate(ing.eatenAt)}</div>
                    </div>
                  </div>
                  <div class="text-gray-400 text-xl">&rsaquo;</div>
                </div>
              {/each}
            </div>
          {:else}
            <p class="text-gray-500 mt-2 italic">No ingredients listed.</p>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}

