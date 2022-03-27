<script lang="ts">
  import type { IRoute } from "$lib/interfaces/route-finder";
  import { getAllRoutes } from "$lib/interfaces/route-finder";
	import Header from "$lib/components/header.svelte";
  import Navigation from "$lib/components/navigation.svelte";

	export let title: string;
	export let author: string;
	export let date: string;
	
	export let github: string;
	export let twitter: string;
	export let website: string;

  const modules = import.meta.glob('../../../routes/**/*.{svelte,svx}');
	console.log(modules);
  let routes: Array<IRoute> = getAllRoutes(modules);

  console.log(routes);
</script>

<div class="flex w-screen h-screen p-8 space-x-16 justify-between bg-neutral-100 dark:bg-neutral-900">
  <Navigation routes={routes} />

	<div class="aspect-[1/1.4142] overflow-y-auto">
		<article id="zine" class="prose prose-neutral dark:prose-invert
			prose-h1:font-semibold prose-h1:text-[4.25rem] prose-h1:leading-[5.75rem] prose-h1:text-focus
			prose-h2:font-semibold prose-h2:text-[2.5rem]  prose-h2:leading-[3.25rem] prose-h2:text-focus
			prose-h3:font-semibold prose-h3:text-[1.75rem] prose-h3:leading-[2.25rem] prose-h3:text-focus
			prose-h4:font-semibold prose-h4:text-[1.25rem] prose-h4:leading-[1.75rem] prose-h4:text-focus
			prose-h5:text-[1.125rem] prose-h5:leading-[1.5rem] prose-h5:text-focus
			prose-h6:font-semibold prose-h6:text-[1rem] prose-h6:leading-[1.5rem] prose-h6:text-focus
			prose-a:decoration-primary-400 prose-a:underline-offset-1 hover:prose-a:decoration-2">
	
			<Header author={author} date={date} github={github} twitter={twitter} website={website} />
			
			{#if title}
				<h1>{title}</h1>
			{/if}
			
			<slot>
				<!-- the mdsvex content will be slotted in here -->
			</slot>
		</article>
	</div>
</div>