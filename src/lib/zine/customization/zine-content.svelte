<script>
	import ZineHeader from '$lib/zine/customization/zine-header.svelte';
</script>

<div class="flex w-full justify-center">
	<article
		id="zine"
		class="w-full max-w-[60ch] pb-12 prose prose-neutral dark:prose-invert prose-sm sm:prose-base 2xl:prose-xl
	prose-a:decoration-primary-600 prose-a:underline-offset-1 hover:prose-a:decoration-2
		prose-code:whitespace-wrap prose-code:break-all prose-code:scrollbar prose-code:scrollbar-thumb-core-400 prose-code:scrollbar-track-core-200 prose-code:dark:scrollbar-thumb-core-600 prose-code:dark:scrollbar-track-core-800 mst
		prose-pre:whitespace-wrap prose-pre:break-all prose-pre:scrollbar prose-pre:scrollbar-thumb-core-400 prose-pre:scrollbar-track-core-200 prose-pre:dark:scrollbar-thumb-core-600 prose-pre:dark:scrollbar-track-core-800 mst"
	>
		<ZineHeader />
		<slot />
	</article>
	
</div>