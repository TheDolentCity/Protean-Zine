<script lang="ts">
  import type { IRoute } from "$lib/interfaces/route-finder";
  import NavigationLink from "$lib/components/navigation-link.svelte";

  export let routes: Array<IRoute>;
</script>

{#if routes}
  <div class="flex flex-col w-40">
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