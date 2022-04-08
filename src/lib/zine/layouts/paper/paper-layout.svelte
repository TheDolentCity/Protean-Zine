<script>
	import { darkMode } from "$lib/stores/dark-mode-store";
	import { Theme } from "$lib/enums/theme";
	import Header from "$lib/components/header/header.svelte";
	import DarkModeButton from '$lib/components/dark-mode-button/dark-mode-button.svelte';
	import Navigation from "$lib/zine/navigation/navigation.svelte";

	/**
	 * Frontmatter properties. 
	 * These are filled automatically by the Frontmatter in a zine.
	 */
	export let title;
	export let author;
	export let date;
	export let github;
	export let twitter;
	export let website;
</script>

<svelte:head>
  <title>{title ? title : "ProteanZine"}</title>
</svelte:head>

<div class={$darkMode === Theme.Dark.name ? 'dark' : $darkMode === Theme.Light.name ? '' : 'dark'}>
	<div class="flex w-screen h-screen max-w-screen max-h-screen space-x-16 justify-center text-default bg-core-100 dark:bg-core-900 mst">
		<div class="pt-8 pl-4">
			<div class="mb-2 pl-2">
				<DarkModeButton />
			</div>
			<hr class="my-4 border-core-900 dark:border-core-100 opacity-25" />
			<div class="flex flex-col min-w-[10rem]">
				<Navigation />
			</div>
		</div>
	
		<div class="aspect-[1/1.4142] pt-8 pr-4 pb-12 overflow-y-auto scrollbar scrollbar-thumb-core-400 scrollbar-track-core-200 dark:scrollbar-thumb-core-600 dark:scrollbar-track-core-800 mst">
			<article id="zine" class="prose prose-neutral dark:prose-invert font-sans mst
				prose-h1:font-semibold prose-h1:text-[4.25rem] prose-h1:leading-[5.75rem] prose-h1:text-focus prose-h1:mst
				prose-h2:font-semibold prose-h2:text-[2.5rem]  prose-h2:leading-[3.25rem] prose-h2:text-focus prose-h2:mst
				prose-h3:font-semibold prose-h3:text-[1.75rem] prose-h3:leading-[2.25rem] prose-h3:text-focus prose-h3:mst
				prose-h4:font-semibold prose-h4:text-[1.25rem] prose-h4:leading-[1.75rem] prose-h4:text-focus prose-h4:mst
				prose-h5:text-[1.125rem] prose-h5:leading-[1.5rem] prose-h5:text-focus prose-h5:mst
				prose-h6:font-semibold prose-h6:text-[1rem] prose-h6:leading-[1.5rem] prose-h6:text-focus prose-h6:mst
				prose-a:decoration-primary-600 prose-a:underline-offset-1 hover:prose-a:decoration-2
				prose-code:whitespace-wrap prose-code:break-all prose-code:scrollbar prose-code:scrollbar-thumb-core-400 prose-code:scrollbar-track-core-200 prose-code:dark:scrollbar-thumb-core-600 prose-code:dark:scrollbar-track-core-800 mst
				prose-pre:whitespace-wrap prose-pre:break-all prose-pre:scrollbar prose-pre:scrollbar-thumb-core-400 prose-pre:scrollbar-track-core-200 prose-pre:dark:scrollbar-thumb-core-600 prose-pre:dark:scrollbar-track-core-800 mst">
		
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