<script>
  import Dialog from '$lib/components/dialog/dialog.svelte';
  import SearchBar from '$lib/components/search-bar/search-bar.svelte';
  import ZineNavigation from '$lib/zine/customization/zine-navigation.svelte';
  import Search16 from "carbon-icons-svelte/lib/Search16";
	
	let isOpen;
  let initialFocusElement;

  const open = () => {
    isOpen = true;
  };

  const close = () => {
    isOpen = false;
  };
</script>

<button on:click={open} class="flex w-full xs:basis-6/12 gap-4 px-4 py-1 justify-between items-center rounded text-base bg-raise-5">
	<span>
		<Search16 />
	</span>
	<span>
		Search
	</span>
	<span class="invisible">
		<Search16 />
	</span>
</button>

<Dialog {isOpen} {initialFocusElement} onDismiss={close}>
	<SearchBar dismissDialog={close} />
</Dialog>