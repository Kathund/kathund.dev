<script lang="ts">
  import DarkModeHandler from './DarkModeHandler.svelte';
  import HorizontalSeparator from './HorizontalSeparator.svelte';
  import Link from './Link.svelte';

  const currentPath = window.location.pathname;
  const pages = [
    { path: '/', name: 'Home' },
    { path: '/projects', name: 'Projects' },
    { path: '/about', name: 'About' }
  ];
</script>

<div>
  <div class="w-full flex flex-row justify-between">
    <div class="flex flex-row gap-2 items-baseline">
      <h1 class="text-ctp-pink text-3xl text-bold">Kathund</h1>
      <span class="text-ctp-mauve text-sm">also known as Jacob!</span>
    </div>
    <div class="text-right flex gap-2">
      {#each pages as page (page.path)}
        <Link
          href={page.path}
          className={currentPath === page.path ? 'text-ctp-pink underline' : ''}
          text={page.name}
          external={false} />
      {/each}
    </div>
  </div>
  <div class="w-full flex flex-row justify-between">
    <p>19 year old dev living in Australia!</p>
    <DarkModeHandler />
  </div>
  <HorizontalSeparator />
</div>
