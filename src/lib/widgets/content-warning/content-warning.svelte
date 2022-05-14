<script>
  import { onMount } from "svelte";
	import { contentWarnings, warningPhrases } from '$lib/stores/content-warning-store.js';
  import WarningAltFilled32 from "carbon-icons-svelte/lib/WarningAltFilled32";

  onMount(() => {
    let zine = document.getElementById("zine");
    $warningPhrases.forEach(phrase => {
      $contentWarnings = [];
      let foundIndex = zine.textContent.indexOf(phrase);
      if (foundIndex >= 0) {
        $contentWarnings = [...$contentWarnings, phrase];
      }
    });
  });
</script>

{#if $contentWarnings.length > 0}
  <div class="not-prose flex space-x-3 mb-12 p-2 border rounded-xl border-core-400 dark:border-core-600 bg-core-200 dark:bg-core-800 mst">
    <WarningAltFilled32 class="fill-yellow-600 dark:fill-yellow-400" />
    <div class="">
      <h2 class="leading-none text-3xl font-semibold text-focus">Content Warning!</h2>
      <div class="mt-2">
        This zine contains one or more of your warning phrases: 
        {#each $contentWarnings as warning}
          <span class="p-1 rounded text-xs font-mono font-semibold text-focus bg-primary-300 dark:bg-primary-700">
            {warning}
          </span>
        {/each}
      </div>
    </div>
  </div>
{/if}