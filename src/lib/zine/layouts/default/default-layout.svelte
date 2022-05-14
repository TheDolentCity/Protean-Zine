<script>
	import { darkMode } from "$lib/stores/dark-mode-store";
	import { Theme } from "$lib/enums/theme";
	import BlogHeader from "$lib/components/blog-header/blog-header.svelte";
	import ContentWarning from "$lib/widgets/content-warning/content-warning.svelte";
	import ZineWrapper from '$lib/zine/customization/zine-wrapper.svelte';

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
	<div class="flex w-screen h-screen max-w-screen max-h-screen px-8 gap-4 lg:gap-8 justify-center scroll-y text-default font-sans bg-default mst">
		<ZineWrapper>
			<ContentWarning />
			<BlogHeader author={author} date={date} github={github} twitter={twitter} website={website} />
			
			<!-- Page Title pulled from Frontmatter -->
			{#if title}
				<h1>{title}</h1>
			{/if}
			
			<slot>
				<!-- the mdsvex content will be slotted in here -->
			</slot>
		</ZineWrapper>
	</div>
</div>