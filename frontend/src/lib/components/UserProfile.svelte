<script>
  import { createEventDispatcher } from 'svelte';
  export let user;
  const dispatch = createEventDispatcher();

  function avatarClicked() {
    dispatch('editAvatar');
  }
</script>

<div class="flex flex-col items-center mb-8">
  <img
    src={user != null ? user.avatar: "https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"}
    alt="User avatar"
    class="w-28 h-28 rounded-full object-cover mb-4 cursor-pointer"
    on:click={avatarClicked}
    tabindex="0"
    role="button"
    aria-label="Edit profile picture"
    on:keydown={(e) => e.key === 'Enter' && avatarClicked()}
  />
  <h1 class="text-3xl font-semibold">{user != null ? user.name : "user is null"}</h1>
</div>

