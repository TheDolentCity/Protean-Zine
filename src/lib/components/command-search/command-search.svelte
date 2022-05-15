<script>
  import { DialogOverlay, DialogContent } from 'svelte-accessible-dialog';
  import Dialog from '$lib/components/dialog/dialog.svelte';
  import ZineNavigation from '$lib/zine/customization/zine-navigation.svelte';
  import Search24 from "carbon-icons-svelte/lib/Search24";
	
	let isOpen;
  let initialFocusElement;

  const open = () => {
    isOpen = true;
  };

  const close = () => {
    isOpen = false;
  };
</script>

<button on:click={open} class="flex-none flex min-w-[20rem] px-2 py-1 justify-between items-center rounded bg-raise-5">
	<span>
		<Search24 />
	</span>
	<span>
		Search
	</span>
	<span class="invisible">
		<Search24 />
	</span>
</button>

<Dialog {isOpen} {initialFocusElement} onDismiss={close}>
	<ZineNavigation />
</Dialog>