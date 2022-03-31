<script>
  let darkMode = window.localStorage.getItem('darkMode');

  function updateDarkMode(mode) {
    window.localStorage.setItem('darkMode', mode);
  }
</script>

<button class="">
  {#if darkMode}
     <!-- content here -->
  {:else if otherCondition}
     <!-- else if content here -->
  {:else}
     <!-- else content here -->
  {/if}
</button>