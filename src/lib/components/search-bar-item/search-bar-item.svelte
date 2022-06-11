<script>
	import { CssBuilder } from '$lib/builders/cssBuilder.js';

  export let title;
  export let link;

	$: css = () => {
		return new CssBuilder()
			.addClass('relative block w-full px-12 py-4')
			.addClass('hover:bg-raise-5 hover:text-focus hover:before:visible')
			.addClass('focus:bg-raise-5 focus:text-focus focus:before:visible')
			.addClass("before:invisible before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary")
			.build();
	};
</script>

<a href={link} class={css()}>
	{title}
</a>