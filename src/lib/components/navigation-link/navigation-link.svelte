<script>
  import { page } from '$app/stores';
	import { openRoutes } from '$lib/stores/navigation-store.js';
	import { CssBuilder } from '$lib/builders/cssBuilder.js';
	import ChevronDown20 from 'carbon-icons-svelte/lib/ChevronDown20';
	import ChevronRight20 from 'carbon-icons-svelte/lib/ChevronRight20';

	export let link;
	export let title;
	export let level = 0;

	function toggleExpansion() {
		$openRoutes[link] = !$openRoutes[link];
	}

	function selectLink() {
		if (link === $page?.url?.pathname) {
			$openRoutes[link] = !$openRoutes[link];
		}
		else $openRoutes[link] = true;
	}

	$: containerCss = () => {
		return new CssBuilder()
			.addClass('relative flex w-full bg-default hover:raise-5')
			.addClass('raise-5', link === $page?.url?.pathname)
			.build();
	};

  $: anchorCss = () => {
		return new CssBuilder()
			.addClass('w-56 px-4 py-2 leading-none whitespace-nowrap')
			.addClass('font-semibold before:content-[""] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-primary-600', link === $page?.url?.pathname)
			.addClass(`ml-[${level}rem]`, level != 0)
			.build();
	};
</script>

<div class={containerCss()}>
	{#if $$slots.subroutes}
		<a on:click={selectLink} href={link} class={anchorCss()}>
			{title}
		</a>
		<button on:click={toggleExpansion} class="pl-1 pr-2 cursor-default">
			{#if $openRoutes[link]}
				<ChevronDown20 />
			{:else}
				<ChevronRight20 />
			{/if}
		</button>
	{:else}
		<a href={link} class={anchorCss()}>
			{title}
		</a>
	{/if}
</div>
{#if $$slots.subroutes && $openRoutes[link]}
	<div class="flex flex-col">
		<slot name="subroutes" />
	</div>
{/if}