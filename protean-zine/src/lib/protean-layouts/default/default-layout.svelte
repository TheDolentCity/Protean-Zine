<script>
	import Header from "$lib/components/header.svelte";

	export let title;
	export let author;
	export let date;
	
	export let github;
	export let twitter;
	export let website;
</script>

<div class="flex w-full h-full p-8 justify-center items-center bg-neutral-100 dark:bg-neutral-900">
	<article id="zine" class="prose prose-neutral dark:prose-invert 
		prose-h1:font-semibold prose-h1:text-[4.25rem] prose-h1:leading-[5.75rem] prose-h1:text-focus
		prose-h2:font-semibold prose-h2:text-[2.5rem]  prose-h2:leading-[3.25rem] prose-h2:text-focus
		prose-h3:font-semibold prose-h3:text-[1.75rem] prose-h3:leading-[2.25rem] prose-h3:text-focus
		prose-h4:font-semibold prose-h4:text-[1.25rem] prose-h4:leading-[1.75rem] prose-h4:text-focus
		prose-h5:text-[1.125rem] prose-h5:leading-[1.5rem] prose-h5:text-focus
		prose-h6:font-semibold prose-h6:text-[1rem] prose-h6:leading-[1.5rem]  prose-h6:text-focus
		prose-a:decoration-primary-400 prose-a:underline-offset-1 hover:prose-a:decoration-2">

		<Header author={author} date={date} github={github} twitter={twitter} website={website} />
		
		<h1>{ title }</h1>
		<h2>{ title }</h2>
		<h3>{ title }</h3>
		<h4>{ title }</h4>
		<h5>{ title }</h5>
		<h6>{ title }</h6>
		
		<slot>
			<!-- the mdsvex content will be slotted in here -->
		</slot>
	</article>
</div>