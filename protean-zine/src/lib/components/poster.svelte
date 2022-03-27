<script lang="ts">
	export let author: string;
	export let date: string;

  $: expanded = false;

  const toggleExpanded = () => expanded = !expanded;
</script>


{#if expanded}
  <div class="flex justify-end">
    <button on:click={toggleExpanded} class="flex flex-col px-4 py-1 shadow align-items-end font-mono rounded-xl border-2 border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 hover:border-neutral-900 hover:dark:border-neutral-50">
      <div class="flex w-full justify-between space-x-8">
        <div class="text-sm">Author</div>
        <div class="text-sm font-semibold text-neutral-900 dark:text-neutral-50">{author}</div>
      </div>
      <div class="flex w-full justify-between space-x-8">
        <div class="text-sm">Date</div>
        <div class="text-sm">{date}</div>
      </div>
    </button>
  </div>
{:else}
  <div class="flex justify-end">
    <button on:click={toggleExpanded} class="flex flex-col px-4 py-1 shadow text-right font-mono rounded-xl border-2 border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 hover:border-neutral-900 hover:dark:border-neutral-50">
      <div class="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Metadata</div>
    </button>
  </div>
{/if}