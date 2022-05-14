<script>
  import CommandSettings from '$lib/components/command-settings/command-settings.svelte';
	import ZineContent from '$lib/zine/customization/zine-content.svelte';
	import ZineCommands from '$lib/zine/customization/zine-commands.svelte';
</script>

<div class="flex flex-col h-full min-w-[65ch] max-h-full -ml-8 pt-4 border-l border-default">
  <div class="sticky w-full">
    <!-- Header -->
    <div class="w-11/12 pl-4">
      <div class="flex w-full gap-6 lg:gap-12 mb-4 justify-between items-center">
        <div class="flex gap-2 items-center">
          <ZineCommands />
        </div>
        <div class="flex gap-2 items-center">
          <CommandSettings />
        </div>
      </div>
    </div>
    <!-- Divider -->
    <hr class="w-full border-raise-25" />
  </div>
  <!-- Content -->
  <div class="w-11/12 pl-8 pt-8">
    <ZineContent>
      <slot />
    </ZineContent>
  </div>
</div>