<script>
  import NavigationLink from "$lib/components/navigation-link.svelte";
</script>

<NavigationLink title="Home" link="/" />
<NavigationLink title="Components" link="/components">
  <NavigationLink slot="subroutes" title="Reading Time" link="/components/reading-time"></NavigationLink>
</NavigationLink>