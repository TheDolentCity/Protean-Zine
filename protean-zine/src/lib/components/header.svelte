<script lang="ts">
  import { onMount } from "svelte";
  import readtime from "estimated-read-time";
  import LogoGithub24 from "carbon-icons-svelte/lib/LogoGithub24";
  import LogoTwitter24 from "carbon-icons-svelte/lib/LogoTwitter24";
  import Link24 from "carbon-icons-svelte/lib/Link24";

  export let author: string;
  export let date: string;
  export let github: string;
  export let twitter: string;
  export let website: string;

  let minutesToRead: string;

  onMount(() => {
    let zine = document.getElementById("zine");
    let result = zine?.textContent ? readtime.text(zine.textContent) : null;
    
    if (result) {
      minutesToRead = Math.floor(result.seconds / 60);
    }
  });
</script>

<div class="flex w-full space-x-12 mb-12 justify-between items-center shadow font-mono">
  <div class="flex flex-col space-y-2">
    <div class="leading-none font-semibold text-neutral-900 dark:text-neutral-50">{author}</div>
    <div class="leading-none">{date}{minutesToRead ? ` · ${minutesToRead} min read` : ""}</div>
  </div>
  <div class="flex space-x-1">
    {#if github}
      <a href={github} class="p-1 cursor-pointer">
        <LogoGithub24 />
      </a>
    {/if}
    {#if twitter}
      <a href={twitter} class="p-1 cursor-pointer">
        <LogoTwitter24 />
      </a>
    {/if}
    {#if website}
      <a href={website} class="p-1 cursor-pointer">
        <Link24 />
      </a>
    {/if}
  </div>
</div>
