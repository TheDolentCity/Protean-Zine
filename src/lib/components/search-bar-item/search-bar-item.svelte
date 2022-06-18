<script>
	import { CssBuilder } from '$lib/builders/cssBuilder.js';
  import ChevronRight16 from "carbon-icons-svelte/lib/ChevronRight16";
  import Hashtag16 from "carbon-icons-svelte/lib/Hashtag16";
  import Tools16 from "carbon-icons-svelte/lib/Tools16";

  export let title;
  export let link;
  export let action;

	$: css = () => {
		return new CssBuilder()
			.addClass('group relative flex w-full p-3 justify-between items-center rounded text-sm bg-raise-5')
			.addClass('hover:bg-primary-600 dark:hover:bg-primary-400 hover:text-focus-invert')
			.addClass('focus:bg-primary-600 dark:focus:bg-primary-400 focus:text-focus-invert')
			.build();
	};
</script>

{#if link}
	<a href={link} class={css()}>
		<div class="flex gap-2 items-center">
			<span class="p-1 rounded bg-raise-5 group:hover:outline-core-500 group:focus:outline-core-500">
				<Hashtag16 />
			</span>
			<span>{title}</span>
		</div>
		<ChevronRight16 />
	</a>
{:else}
	<button on:click={action} class={css()}>
		<div class="flex gap-2 items-center">
			<span class="p-1 rounded bg-raise-5 group:hover:outline-core-500 group:focus:outline-core-500">
				<Tools16 />
			</span>
			<span>{title}</span>
		</div>
		<ChevronRight16 />
	</button>
{/if}