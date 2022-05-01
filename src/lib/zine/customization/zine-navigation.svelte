<script>
  import NavigationLink from "$lib/components/navigation-link/navigation-link.svelte";
</script>

<NavigationLink title="Home" link="/" />
<NavigationLink title="Components" link="/components">
  <NavigationLink slot="subroutes" level={1} title="Reading Time" link="/components/reading-time"></NavigationLink>
</NavigationLink>
<NavigationLink title="Setup" link="/setup">
  <svelte:fragment slot="subroutes">
    <NavigationLink level={1} title="Beginners" link="/setup/beginner"></NavigationLink>
    <NavigationLink level={1} title="Developers" link="/setup/developer"></NavigationLink>
  </svelte:fragment>
</NavigationLink>
<NavigationLink title="Customization" link="/customization">
  <svelte:fragment slot="subroutes">
    <NavigationLink level={1} title="Layouts" link="/customization/layouts"></NavigationLink>
    <NavigationLink level={1} title="Typography" link="/customization/typography"></NavigationLink>
  </svelte:fragment>
</NavigationLink>
<NavigationLink title="Extensibility" link="/extensibility">
  <svelte:fragment slot="subroutes">
    <NavigationLink level={1} title="Frontmatter" link="/extensibility/frontmatter"></NavigationLink>
    <NavigationLink level={1} title="Remark" link="/extensibility/remark"></NavigationLink>
    <NavigationLink level={1} title="Rehype" link="/extensibility/rehype"></NavigationLink>
  </svelte:fragment>
</NavigationLink>