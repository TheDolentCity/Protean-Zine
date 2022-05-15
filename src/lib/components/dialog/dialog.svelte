<script>
  import { DialogOverlay, DialogContent } from 'svelte-accessible-dialog';
	import { Theme } from "$lib/enums/theme";
	import { CssBuilder } from '$lib/builders/cssBuilder.js';
	import { darkMode } from "$lib/stores/dark-mode-store";
	
	export let isOpen;
  export let initialFocusElement;
	export let onDismiss;

	$: overlayCss = () => {
		return new CssBuilder()
			.addClass('z-50 !bg-black/50')
			.addClass('dark', $darkMode === Theme.Dark.name)
			.build();
	};
</script>

<DialogOverlay {isOpen} {initialFocusElement} onDismiss={onDismiss} class={overlayCss()}>
  <DialogContent aria-label="Announcement" class="text-default bg-core-200 dark:bg-core-800">
    <slot />
  </DialogContent>
</DialogOverlay>