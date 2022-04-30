<script>
  import { page } from '$app/stores';
	import { openRoutes } from '$lib/stores/navigation-store.js';
	import { CssBuilder } from '$lib/builders/cssBuilder.js';
	import ChevronDown20 from 'carbon-icons-svelte/lib/ChevronDown20';
	import ChevronRight20 from 'carbon-icons-svelte/lib/ChevronRight20';

	export let link;
	export let title;

	function toggleExpansion() {
		$openRoutes[link] = !$openRoutes[link];
	}

	function selectLink() {
		if (link === $page?.url?.pathname) {
			$openRoutes[link] = !$openRoutes[link];
		}
		else $openRoutes[link] = true;
	}

  $: linkCss = () => {
		return new CssBuilder()
			.addClass('p-2 rounded leading-none whitespace-nowrap underline-offset-1 hover:underline')
			.addClass('underline underline-offset-2 decoration-2 decoration-primary-700 dark:decoration-primary-600', link === $page?.url?.pathname)
			.build();
	};
</script>

{#if $$slots.subroutes}
	<div class="flex w-full">
		<button on:click={toggleExpansion} class="pl-1 cursor-default">
			{#if $openRoutes[link]}
				<ChevronDown20 />
			{:else}
				<ChevronRight20 />
			{/if}
		</button>
		<a on:click={selectLink} href={link} class={linkCss()}>
			{title}
		</a>
	</div>
	{#if $openRoutes[link]}
		<div class="flex flex-col pl-8">
			<slot name="subroutes" />
		</div>
	{/if}
{:else}
	<a href={link} class={linkCss()}>
		{title}
	</a>
{/if}