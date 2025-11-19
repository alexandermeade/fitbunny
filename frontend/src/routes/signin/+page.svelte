<script>
  import { goto } from '$app/navigation';
  import { redirect } from '@sveltejs/kit';
  
  let email = '';
  let password = '';
  let username = '';
  let errorMsg = "";
  let data = null;

  async function handleSubmit(event) {
    event.preventDefault();
      // Replace with your login logic
    const response = await fetch('http://localhost:8080/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // <-- this is essential
        body: JSON.stringify({ email, password, username:""}),
    });

      if (!response.ok) {
          return;
    }
          data = await response.json();

    if (!data.success) {
        errorMsg = data.message;
        return; 
    }

    goto('http://localhost:5173/homepage');
    
    console.log('Logging in with:', { email, password });
  }
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100 px-4"> 
  <form on:submit={handleSubmit} class="max-w-md w-full bg-white p-8 rounded shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-center">Sign In</h2>
    <label for="email" class="block mb-2 font-semibold text-gray-700">Email</label>
    <input
      id="email"
      type="email"
      bind:value={email}
      required
      placeholder="you@example.com"
      class="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <p>{errorMsg}</p>
    <label for="password" class="block mb-2 font-semibold text-gray-700">Password</label>
    <input
      id="password"
      type="password"
      bind:value={password}
      required
      placeholder="Your password"
      class="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      type="submit"
      class="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
    >
      Sign Up
    </button>
  </form>
</div>


