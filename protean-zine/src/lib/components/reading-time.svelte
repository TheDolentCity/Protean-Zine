<script>
  import { onMount } from "svelte";
  import readtime from "estimated-read-time";

  let minutesToRead;

  onMount(() => {
    let zine = document.getElementById("zine");
    let result = zine?.textContent ? readtime.text(zine.textContent) : null;
    
    if (result) {
      minutesToRead = Math.ceil(result.seconds / 60).toString();
    }
  });
</script>

<span class="mst">{minutesToRead} min read</span>