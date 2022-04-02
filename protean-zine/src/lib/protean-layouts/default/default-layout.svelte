<script>
  import { darkMode } from "$lib/stores/dark-mode-store";
	import { getAllRoutes } from '$lib/interfaces/route-finder';
	import { Theme } from "$lib/enums/theme";
	import Header from "$lib/components/header.svelte";
  import Navigation from "$lib/components/navigation.svelte";
	import DarkModeButton from '$lib/components/dark-mode-button.svelte';

	export let title;
	export let author;
	export let date;
	
	export let github;
	export let twitter;
	export let website;

	// Load routes
  const modules = import.meta.glob('../../../routes/**/*.{svelte,svx}');
  let routes = getAllRoutes(modules);
</script>

<div class={$darkMode === Theme.Dark.name ? 'dark' : ''}>
	<div class="flex w-screen h-screen space-x-16 justify-between text-default bg-core-100 dark:bg-core-900 mst">
		<div class="pt-8 pl-8">
			<DarkModeButton />
			<Navigation routes={routes} />
		</div>
	
		<div class="aspect-[1/1.4142] pt-8 pr-8 overflow-y-auto">
			<article id="zine" class="prose prose-neutral dark:prose-invert font-sans mst
				prose-h1:font-semibold prose-h1:text-[4.25rem] prose-h1:leading-[5.75rem] prose-h1:text-focus
				prose-h2:font-semibold prose-h2:text-[2.5rem]  prose-h2:leading-[3.25rem] prose-h2:text-focus
				prose-h3:font-semibold prose-h3:text-[1.75rem] prose-h3:leading-[2.25rem] prose-h3:text-focus
				prose-h4:font-semibold prose-h4:text-[1.25rem] prose-h4:leading-[1.75rem] prose-h4:text-focus
				prose-h5:text-[1.125rem] prose-h5:leading-[1.5rem] prose-h5:text-focus
				prose-h6:font-semibold prose-h6:text-[1rem] prose-h6:leading-[1.5rem] prose-h6:text-focus
				prose-a:decoration-primary-400 prose-a:underline-offset-1 hover:prose-a:decoration-2">
		
				<Header author={author} date={date} github={github} twitter={twitter} website={website} />
				
				{#if title}
					<h1>{title}</h1>
				{/if}
				
				<slot>
					<!-- the mdsvex content will be slotted in here -->
				</slot>
			</article>
		</div>
	</div>
</div>