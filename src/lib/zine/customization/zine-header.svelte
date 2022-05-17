<script>
	import CommandSearch from '$lib/components/command-search/command-search.svelte';
  import CommandSettings from '$lib/components/command-settings/command-settings.svelte';
	import ZineContent from '$lib/zine/customization/zine-content.svelte';
	import ZineCommands from '$lib/zine/customization/zine-commands.svelte';
</script>

<div class="not-prose sticky z-30 top-0 flex flex-col w-full mb-4 justify-center bg-default mst">
	<!-- Header -->
	<div class="basis-11/12 py-4">
		<div class="flex w-full gap-6 lg:gap-12 justify-between items-center">
			<div class="hidden xs:flex gap-2 items-center">
				<ZineCommands />
			</div>
			<CommandSearch />
			<span class="hidden xs:block">
				<CommandSettings />
			</span>
		</div>
	</div>
	<!-- Divider -->
	<hr class="-mx-8 border-raise-25" />
</div>