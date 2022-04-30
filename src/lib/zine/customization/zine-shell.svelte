<script>
  import Menu24 from "carbon-icons-svelte/lib/Menu24";
	import { darkMode } from "$lib/stores/dark-mode-store";
	import { Theme } from "$lib/enums/theme";
	import ZineCommands from "$lib/zine/customization/zine-commands.svelte";
	import ZineNavigation from "$lib/zine/customization/zine-navigation.svelte";

	let activeView = "";

	function toggleNavigation() {
		activeView = activeView === 'navigation' ? '' : 'navigation';
	}
</script>

<div class={$darkMode === Theme.Dark.name ? 'dark' : $darkMode === Theme.Light.name ? '' : 'dark'}>
	<div class="flex w-screen h-screen max-w-screen max-h-screen gap-4 lg:gap-8 justify-between text-default bg-core-100 dark:bg-core-900 mst">
		<div class="flex">
			<div class="flex-none flex flex-col h-full max-h-full gap-4 p-4 overflow-y-auto raise-5 mst">
				<button on:click={toggleNavigation} class="lg:hidden">
					<Menu24 />
				</button>
				<ZineCommands />
			</div>
			<div class="hidden lg:flex flex-col min-w-[10rem] h-full max-h-full pl-4 pr-8 py-4 border-r border-default scroll-y mst">
				<ZineNavigation />
			</div>
		</div>
		<div class="flex flex-1 h-full max-h-full pr-4 justify-center scroll-y">
			<slot></slot>
		</div>

		<!-- Overlay versions -->
		{#if activeView === 'content'}
			<div class="absolute lg:hidden left-14 right-0 top-0 bottom-0 flex flex-col p-4 scroll-y bg-core-100 dark:bg-core-900">
				<slot></slot>
			</div>
			 <!-- content here -->
		{:else if  activeView === 'navigation'}
			<div class="absolute lg:hidden left-14 right-0 top-0 bottom-0 flex flex-col p-4 scroll-y bg-core-100 dark:bg-core-900">
				<ZineNavigation />
			</div>
		{:else}
			 <!-- else content here -->
		{/if}
	</div>
</div>