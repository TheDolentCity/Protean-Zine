<script>
	import { CssBuilder } from './../builders/cssBuilder.js';
  import { page } from '$app/stores';

  export let route;

  $: css = () => {
		return new CssBuilder()
			.addClass('p-2 rounded leading-none whitespace-nowrap hover:raise-5')
			.addClass('underline decoration-2 decoration-primary-400 underline-offset-1', route?.link === $page?.url?.pathname)
			.build();
	};
</script>

<a href={route.link} class={css()}>
  {route.title}
</a>