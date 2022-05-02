<script>
  import ReadingTime from "$lib/components/reading-time/reading-time.svelte";
  import LogoGithub24 from "carbon-icons-svelte/lib/LogoGithub24";
  import LogoTwitter24 from "carbon-icons-svelte/lib/LogoTwitter24";
  import Link24 from "carbon-icons-svelte/lib/Link24";

  export let author;
  export let date;
  export let github;
  export let twitter;
  export let website;
</script>

{#if author || date || github || twitter || website}
	<div class="flex w-full gap-6 lg:gap-12 mb-12 justify-between items-center">
		<div class="flex flex-col space-y-2">
			<!-- Author -->
			{#if author}
				<div class="leading-none text-sm font-semibold text-focus">{author}</div>
			{/if}
			<!-- Date and Reading Time -->
			{#if date}
				<div class="leading-none text-sm">
					{date} · <ReadingTime />
				</div>
			{/if}
		</div>
		<!-- Social Media Links -->
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
{/if}