<script>
	import { getAllRoutes } from '$lib/processors/route-finder';
	import SearchBarItem from '$lib/components/search-bar-item/search-bar-item.svelte';
  import Search24 from "carbon-icons-svelte/lib/Search24";

  export let value;

	const modules = import.meta.glob('../../../**/*.zine');
	const routes = getAllRoutes(modules);
	console.log(routes);
</script>

<div class="min-w-[16rem] sm:min-w-[32rem]">
	<div class="relative w-full items-center bg-inherit">
		<span class="absolute left-4 top-4">
			<Search24 />
		</span>
		<label for="search-bar" class="sr-only">Search bar</label>
		<input type="search" bind:value placeholder="Search" class="appearance-none w-full m-0 pl-12 pr-4 py-4 rounded-t outline-none cursor-text border-b-2 border-transparent bg-inherit caret-primary-600 dark:caret-primary-400 focus:text-focus focus:placeholder:text-focus focus:border-primary-600 dark:focus:border-primary-400" />
	</div>
	<div tabindex=-1 class="flex flex-col  max-h-[32rem] overflow-y-auto border-t border-gray-300 dark:border-gray-700 divide-y divide-core-300 dark:divide-core-700">
		{#each routes as route}
			<SearchBarItem title={route.title} link={route.link} />
		{:else}
			<p>No results. Try refining search.</p>
		{/each}
	</div>
</div>