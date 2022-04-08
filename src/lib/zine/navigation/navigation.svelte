<script>
  import NavigationLink from "$lib/components/navigation-link/navigation-link.svelte";
</script>

<NavigationLink title="Home" link="/" />
<NavigationLink title="Components" link="/components">
  <NavigationLink slot="subroutes" title="Reading Time" link="/components/reading-time"></NavigationLink>
</NavigationLink>
<NavigationLink title="Setup" link="/setup">
  <svelte:fragment slot="subroutes">
    <NavigationLink title="Beginners" link="/setup/beginner"></NavigationLink>
    <NavigationLink title="Developers" link="/setup/developer"></NavigationLink>
  </svelte:fragment>
</NavigationLink>
<NavigationLink title="Customization" link="/customization">
  <svelte:fragment slot="subroutes">
    <NavigationLink title="Layouts" link="/customization/layouts"></NavigationLink>
    <NavigationLink title="Typography" link="/customization/typography"></NavigationLink>
  </svelte:fragment>
</NavigationLink>
<NavigationLink title="Extensibility" link="/extensibility">
  <svelte:fragment slot="subroutes">
    <NavigationLink title="Frontmatter" link="/extensibility/frontmatter"></NavigationLink>
    <NavigationLink title="Remark" link="/extensibility/remark"></NavigationLink>
    <NavigationLink title="Rehype" link="/extensibility/rehype"></NavigationLink>
  </svelte:fragment>
</NavigationLink>