<script>
  import { page } from '$app/stores';
	import { openRoutes } from '$lib/stores/navigation-store.js';
	import { CssBuilder } from '$lib/builders/cssBuilder.js';
	import ChevronDown20 from 'carbon-icons-svelte/lib/ChevronDown20';
	import ChevronUp20 from 'carbon-icons-svelte/lib/ChevronUp20';

	export let link;
	export let title;

	function toggleExpansion() {
		$openRoutes[link] = !$openRoutes[link];
	}

  $: css = () => {
		return new CssBuilder()
			.addClass('flex-auto p-2 rounded leading-none whitespace-nowrap hover:raise-5')
			.addClass('underline decoration-2 decoration-primary-600 underline-offset-1', link === $page?.url?.pathname)
			.build();
	};
</script>

{#if $$slots.subroutes}
	<div class="flex w-full">
		<button on:click={toggleExpansion} class="pl-1">
			{#if $openRoutes[link]}
				<ChevronUp20 />
			{:else}
				<ChevronDown20 />
			{/if}
		</button>
		<a href={link} class={css()}>
			{title}
		</a>
	</div>
	<div class="flex flex-col pl-6">
		{#if $openRoutes[link]}
			<slot name="subroutes" />
		{/if}
	</div>
{:else}
	<a href={link} class={css()}>
		{title}
	</a>
{/if}