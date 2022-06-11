<script>
  import NavigationLink from "$lib/components/navigation-link/navigation-link.svelte";

	export let nodes;
</script>

{#each nodes as node}
	{#if node.children}
		<NavigationLink title={node.title} link={node.link}>
			<svelte:fragment slot="subroutes">
				<svelte:self nodes={node.children} />
			</svelte:fragment>
		</NavigationLink>
	{:else}
		<NavigationLink title={node.title} link={node.link} />
	{/if}
{/each}