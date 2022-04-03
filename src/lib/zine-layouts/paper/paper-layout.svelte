<script context="module">
	import { h1 } from './components.js';
	export { h1 };

	import Poster from "$lib/components/poster.svelte";

	export let title;
	export let author;
	export let date;
</script>

<div class="flex w-full h-full p-8 justify-center items-center bg-core-100 dark:bg-core-900">
	<article class="prose prose-neutral dark:prose-invert prose-a:decoration-sky-400 prose-a:underline-offset-1 hover:prose-a:decoration-2">
		<h1>{ title }</h1>

		<Poster author={author} date={date} />
		
		<slot>
			<!-- the mdsvex content will be slotted in here -->
		</slot>
	</article>
</div>