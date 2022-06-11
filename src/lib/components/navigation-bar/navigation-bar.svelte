<script>
	export let previousPage;
	export let chapterPage;
	export let nextPage;
</script>

<div class="flex w-full gap-6 lg:gap-12 justify-between items-center">
	<div class="flex flex-start gap-1">
		<span class="leading-none text-xs font-semibold">⟵</span>
		<div class="flex flex-col gap-1">
			<span class="leading-none text-xs font-semibold">Previous page</span>
			<span class="leading-none text-xs">{previousPage}</span>
		</div>
	</div>
	<div class="flex flex-col gap-1">
		<span class="leading-none text-xs font-semibold">Chapter page</span>
		<span class="leading-none text-xs">{chapterPage}</span>
	</div>
	<div class="flex flex-start gap-1">
		<div class="flex flex-col gap-1">
			<span class="leading-none text-xs font-semibold">Next page</span>
			<span class="leading-none text-xs">{nextPage}</span>
		</div>
		<span class="leading-none text-xs font-semibold">⟶</span>
	</div>
</div>