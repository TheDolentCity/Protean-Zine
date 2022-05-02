<script>
	import paper from "$lib/assets/images/paper.jpg";
	import { darkMode } from "$lib/stores/dark-mode-store";
	import { Theme } from "$lib/enums/theme";
	import Header from "$lib/components/header/header.svelte";
	import ContentWarning from "$lib/components/content-warning/content-warning.svelte";
	import ZineContent from "$lib/zine/customization/zine-content.svelte";
	import ZineShell from "$lib/zine/customization/zine-shell.svelte";

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

<div class="relative flex w-screen h-screen max-w-screen max-h-screen gap-4 lg:gap-8 justify-between text-default font-serif">
	<!-- This is the special paper background -->
	<div class="absolute inset-0 opacity-30 bg-paper bg-center bg-cover bg-no-repeat select-none" style="background-image:url({paper})"></div>
	<ZineShell>
		<ZineContent>
			<ContentWarning />
			<Header author={author} date={date} github={github} twitter={twitter} website={website} />
			
			<!-- Page Title pulled from Frontmatter -->
			{#if title}
				<h1>{title}</h1>
			{/if}
			
			<slot>
				<!-- the mdsvex content will be slotted in here -->
			</slot>
		</ZineContent>
	</ZineShell>
</div>