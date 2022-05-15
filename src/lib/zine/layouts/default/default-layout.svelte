<script>
	import { darkMode } from "$lib/stores/dark-mode-store";
	import { Theme } from "$lib/enums/theme";
	import BlogHeader from "$lib/components/blog-header/blog-header.svelte";
	import ContentWarning from "$lib/widgets/content-warning/content-warning.svelte";
	import ZineContent from '$lib/zine/customization/zine-content.svelte';

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
  <title>{title ? title : "Protean Zine"}</title>
</svelte:head>

<div class={$darkMode === Theme.Dark.name ? 'dark' : $darkMode === Theme.Light.name ? '' : 'dark'}>
	<div class="flex flex-col w-screen max-w-screen h-screen max-h-screen justify-center text-default font-sans bg-default mst">
		<div class="aspect-[1.41/1] h-full max-h-full px-8 scroll-y">
			<ZineContent>
				<ContentWarning />
				<BlogHeader author={author} date={date} github={github} twitter={twitter} website={website} />
				
				<!-- Page Title pulled from Frontmatter -->
				{#if title}
					<h1>{title}</h1>
				{/if}
				
				<slot>
					<!-- the zine content will be slotted in here -->
				</slot>
			</ZineContent>
		</div>
	</div>
</div>