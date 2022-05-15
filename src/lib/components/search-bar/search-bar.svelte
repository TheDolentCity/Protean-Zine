<script>
  import Search24 from "carbon-icons-svelte/lib/Search24";

  export let name;
  export let value;

  let checked = false;

  function change(target) {
    console.log(name + ":" + target.checked);
    checked = target.checked;
  }
</script>

<label class="inline-flex w-full items-start cursor-pointer">
  <input type="radio" name={name} bind:value on:change={change} {checked} class="appearance-none flex m-0 w-[1.25em] h-[1.25em] justify-center items-center cursor-pointer rounded-full border-2 border-focus before:content-[''] before:invisible checked:before:visible before:w-[0.65em] before:h-[0.65em] before:rounded-full before:bg-invert" />
  <!-- <span class="flex w-4 h-4 justify-center items-center rounded-full border-2 border-focus checked:invisible after:content-[''] after:w-1.5 after:h-1.5 after:rounded-full after:bg-white"/> -->
  <span class="ml-2">
    <slot />
  </span>
</label>

<div class="flex">
	<span>
		<Search24 />
	</span>
	<input>
</div>