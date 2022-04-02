<script>
	import { CssBuilder } from '$lib/builders/cssBuilder.js';
  import NavigationLink from "$lib/components/navigation-link.svelte";

  export let routes;
  export let className;

  $: css = () => {
		return new CssBuilder()
			.addClass('flex flex-col w-40 space-y-1')
			.addClass(className)
			.build();
	};
</script>

{#if routes}
  <div class={css()}>
    <NavigationLink route={{
      title: "Home",
      link: "/",
      subroutes: null
    }} />
    {#each routes as route}
      <NavigationLink route={route} />
    {/each}
  </div>
{/if}