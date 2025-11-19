<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import MealCard from "$lib/components/Mealcard.svelte";
  import MealDetail from "$lib/components/MealDetail.svelte";
  import MealUpload from "$lib/components/MealUpload.svelte";
  import UserProfile from '$lib/components/UserProfile.svelte';

  let user = null;
  let meals = [];
  let loading = true;

  let showUploadPopup = false;
  let selectedMeal = null;

  onMount(async () => {
    try {
      const res = await fetch('http://localhost:8080/self', {
        method: 'GET',
        credentials: 'include',
      });

      const data = await res.json();

      if (!res.ok || data === "SessionMissing") {
        goto("/signup");
        throw new Error("Session invalid or missing");
      }

      user = {
        name: data.name,
        avatar: "https://randomuser.me/api/portraits/women/68.jpg", // Replace with backend-provided avatar
      };

      meals = data.meals ?? [];

    } catch (err) {
        goto("/signin")
      console.error('Failed to fetch user data:', err);
    } finally {
      loading = false;
    }
  });

  function addMeal(imageUrl) {
    meals = [
      {
        id: meals.length,
        name: "New Meal",
        description: "No description provided.",
        image: imageUrl,
        kcals: Math.floor(Math.random() * 400 + 100),
        eatenAt: new Date(),
        ingredients: [],
      },
      ...meals,
    ];
  }

    async function logout() {
      try {
        const res = await fetch('http://localhost:8080/api/logout', {
          method: 'POST',
          credentials: 'include',
        });

        if (!res.ok) {
          throw new Error('Logout failed');
        }

        // Clear local user state
        user = null;
        meals = [];
        
        // Redirect to signup/login page
        goto('/signup');

      } catch (err) {
        console.error('Logout error:', err);
      }
    }
</script>

<div class="max-w-2xl mx-auto px-4 py-8">
    {#if user} 
        <button on:click={()=> logout()}

      class="absolute top-0 right-0 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10"
      aria-label="logout"
            >
        logout
        </button>
    {/if}
  <UserProfile {user} />
  <!-- Meals List -->
  <div class="relative">
    <div class="flex flex-col gap-3">
      {#each meals as meal}
        <!-- Listen to the custom 'select' event from MealCard -->
        <MealCard {meal} on:select={() => (selectedMeal = meal)} />
      {/each}
    </div>

    <!-- Floating Plus Button -->
    <button
      on:click={() => (showUploadPopup = true)}
      class="absolute top-0 right-0 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10"
      aria-label="Add meal"
    >
      +
    </button>
  </div>
</div>


{#if selectedMeal}
  <MealDetail meal={selectedMeal} onClose={() => (selectedMeal = null)} />
{/if}

<MealUpload show={showUploadPopup} onClose={() => (showUploadPopup = false)} onSubmit={addMeal} />
