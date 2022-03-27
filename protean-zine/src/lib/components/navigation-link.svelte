<script lang="ts">
  import type { IRoute } from "$lib/interfaces/route-finder";

  export let route: IRoute;
</script>

<a href={route.link} class="py-1 rounded hover:underline hover:decoration-2 hover:decoration-primary-400 hover:underline-offset-1">
  {route.title}
</a>