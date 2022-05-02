<script>
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

<div class={$darkMode === Theme.Dark.name ? 'dark' : $darkMode === Theme.Light.name ? '' : 'dark'}>
	<div class="flex w-screen h-screen max-w-screen max-h-screen gap-4 lg:gap-8 justify-between text-default font-sans bg-core-100 dark:bg-core-900 mst">
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
</div>