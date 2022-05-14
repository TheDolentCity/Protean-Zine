<script>
  import { onMount } from "svelte";
  import readtime from "estimated-read-time";

  // let minutesToRead;
  let promise;

  async function getMinutesToRead() {
    let zine = document.getElementById("zine");
    let result = zine?.textContent ? readtime.text(zine.textContent) : null;
    
    if (result) {
      let text = Math.ceil(result.seconds / 60).toString();
      return text;
    }
    
    throw new Error();
	}

  onMount(() => {
    promise = getMinutesToRead();
  });
</script>

{#await promise}
  <span class="">Calculating reading time</span>
{:then minutesToRead}
  <span class="">{minutesToRead} min read</span>
{:catch error}
  <span class="">Unknown min read</span>
{/await}