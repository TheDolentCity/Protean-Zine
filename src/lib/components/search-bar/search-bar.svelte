<script>
  import Search24 from "carbon-icons-svelte/lib/Search24";

  export let value;
</script>

<div class="divide-y divide-gray-400 dark:divide-gray-600">
	<label class="inline-flex w-full px-4 py-4 gap-4 items-center cursor-default">
		<span>
			<Search24 />
		</span>
		<input type="text" bind:value placeholder="Search" class="appearance-none flex flex-auto m-0 p-1 items-center rounded cursor-text bg-inherit outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400" />
	</label>
</div>