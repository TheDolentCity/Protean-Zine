<script>
	import CommandSearch from '$lib/components/command-search/command-search.svelte';
</script>

<div class="not-prose sticky z-30 top-0 inset-x-0 flex flex-col w-full mb-4 justify-center bg-default mst after:fixed after:top-0 after:left-0 after:right-0 after:h-16 after:pointer-events-none after:shadow-md">
	<!-- Header -->
	<div class="basis-11/12 py-4">
		<div class="flex w-full gap-6 lg:gap-12 justify-center items-center">
			<CommandSearch />
		</div>
	</div>
</div>