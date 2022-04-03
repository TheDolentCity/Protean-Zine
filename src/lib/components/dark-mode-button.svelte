<script>
  import { darkMode } from "$lib/stores/dark-mode-store";
  import { Theme } from "$lib/enums/theme";
  import Moon24 from "carbon-icons-svelte/lib/Moon24";
  import Sun24 from "carbon-icons-svelte/lib/Sun24";
</script>

{#if $darkMode && $darkMode === Theme.Dark.name}
  <button on:click={() => $darkMode = Theme.Light.name}>
    <Moon24 />
  </button>
{:else if $darkMode && $darkMode === Theme.Light.name}
  <button on:click={() => $darkMode = Theme.Dark.name}>
    <Sun24 />
  </button>
{:else}
  <button on:click={() => $darkMode = Theme.Light.name}>
    <Moon24 />
  </button>
{/if}