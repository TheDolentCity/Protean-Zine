<script>
  let darkMode = window.localStorage.getItem('darkMode');
</script>

{#if darkMode && darkMode === "dark"}
  <div class="dark">
    <slot />
  </div>
{:else}
  <slot />
{/if}