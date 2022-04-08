<script context="module">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`
      }
    };
  }
</script>

<script>
  import "../app.css";
	import DefaultLayout from '$lib/zine/layouts/default/default-layout.svelte';

  export let title;
</script>

<main class="text-default">
  <DefaultLayout title={title} />
</main>