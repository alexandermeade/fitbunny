<script>
  export let show;
  export let onClose = () => {};
  export let onSubmit = () => {};
  let formData = {
    name: '',
    description: '',
  };
</script>

{#if show}
  <div
    class="fixed inset-0 flex items-center justify-center z-50 p-4 overflow-auto"
    style="background-color: rgba(255, 255, 255, 0.3); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);"
    on:click={onClose}
    role="dialog"
    aria-modal="true"
    aria-labelledby="form-dialog-title"
  >
    <div
      class="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 space-y-6"
      on:click|stopPropagation
    >
      <button
        on:click={onClose}
        aria-label="Close form"
        class="text-gray-400 hover:text-gray-600 text-xl absolute top-4 right-4"
      >
        &times;
      </button>

      <h2 id="form-dialog-title" class="text-2xl font-semibold text-gray-800 text-center">
        Upload New Item
      </h2>

      <form
        class="space-y-4"
        on:submit|preventDefault={() => onSubmit(formData)}
      >
        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-700" for="name">Name</label>
          <input
            id="name"
            type="text"
            class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            bind:value={formData.name}
            required
          />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm font-medium text-gray-700" for="description">Description</label>
          <textarea
            id="description"
            class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            bind:value={formData.description}
          ></textarea>
        </div>

        <div class="flex justify-end gap-4 pt-4">
          <button
            type="button"
            on:click={onClose}
            class="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}

