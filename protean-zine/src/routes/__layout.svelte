<script lang="ts">
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
</script>

<main class="flex w-full h-full justify-center items-center bg-slate-100 dark:bg-slate-900">
  <div class="flex-none p-8">
    <slot />
  </div>
</main>