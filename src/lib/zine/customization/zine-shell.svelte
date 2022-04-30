<script>
	import { darkMode } from "$lib/stores/dark-mode-store";
	import { Theme } from "$lib/enums/theme";
	import ZineCommands from "$lib/zine/customization/zine-commands.svelte";
	import ZineNavigation from "$lib/zine/customization/zine-navigation.svelte";
</script>

<div class={$darkMode === Theme.Dark.name ? 'dark' : $darkMode === Theme.Light.name ? '' : 'dark'}>
	<div class="flex w-screen h-screen max-w-screen max-h-screen gap-4 lg:gap-8 justify-between text-default bg-core-100 dark:bg-core-900 mst">
		<div class="flex">
			<div class="flex-none flex flex-col h-full max-h-full gap-4 p-4 overflow-y-auto raise-5 mst">
				<ZineCommands />
			</div>
			<div class="hidden lg:flex flex-col min-w-[10rem] h-full max-h-full pl-6 pr-8 py-4 border-r border-default overflow-y-auto mst">
				<ZineNavigation />
			</div>
		</div>
		<div class="flex flex-1 h-full max-h-full justify-center scroll-y">
			<slot></slot>
		</div>
	</div>
</div>