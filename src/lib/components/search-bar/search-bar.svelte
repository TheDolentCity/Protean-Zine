<script>
	import { getAllRoutes } from '$lib/processors/route-finder';
	import { routes } from '$lib/processors/search-routes';
	import { tools } from '$lib/processors/search-tools';
	import SearchBarItem from '$lib/components/search-bar-item/search-bar-item.svelte';
	import ZineNavigation from '$lib/zine/customization/zine-navigation.svelte';
  import Search20 from "carbon-icons-svelte/lib/Search20";

  export let value;

	// const modules = import.meta.glob('../../../**/*.zine');
	// const routes = getAllRoutes(modules);
	// console.log(routes);

	console.log(tools);
	let sections = routes.concat([{
		title: 'Actions',
		items: tools,
	}]);
</script>

<div class="min-w-[16rem] sm:min-w-[32rem]">
	<div class="relative w-full items-center text-sm bg-inherit">
		<span class="absolute left-4 top-4">
			<Search20 />
		</span>
		<label for="search-bar" class="sr-only">Search bar</label>
		<input type="search" bind:value placeholder="Search" class="appearance-none w-full m-0 pl-12 pr-4 py-4 rounded-t outline-none cursor-text bg-inherit caret-primary-600 dark:caret-primary-400 focus:text-focus" />
	</div>
	<div tabindex=-1 class="flex flex-col max-h-[32rem] px-4 py-6 overflow-y-auto border-t border-core-200 dark:border-core-700">
		{#each sections as section}
			{#if section.title}
				<h3 class="mt-8 mb-4 text-lg font-medium text-focus">{section.title}</h3>
			{/if}
			{#if section.items}
				<div class="flex flex-col gap-1">
					{#each section.items as item}
						{#if item?.link}
							<SearchBarItem title={item.title} link={item.link} />
						{:else if item?.action}
							<SearchBarItem title={item.title} action={item.action} />
						{/if}
					{/each}
				</div>
			{/if}
		{:else}
			<p>No results. Try refining search.</p>
		{/each}
	</div>
</div>