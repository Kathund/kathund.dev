<script lang="ts">
  import { randomCase } from '../lib/misc';
  import Link from './Link.svelte';

  let { name, links: badLinks, note, shouldRandomCase }: PersonProps = $props();

  function randomizeName() {
    name = shouldRandomCase === true ? randomCase(name) : name;
  }

  randomizeName();

  const links = [...badLinks].sort((a, b) => {
    if (a.text === 'Site') return -1;
    if (b.text === 'Site') return 1;
    return a.text.toLowerCase().localeCompare(b.text.toLowerCase());
  });

  const mainLink = links[0]?.href;
</script>

<div on:mouseover={randomizeName}>
  <div class="flex flex-row items-baseline gap-2">
    <Link href={mainLink} text="- {name}" />
    {#if note !== undefined}
      <p class="text-xs text-ctp-text/30">{note}</p>
    {/if}
  </div>

  <div class="pl-8 text-sm text-ctp-text/60 flex flex-col">
    {#each links as link (link.text)}
      <Link href={link.href} text="- {link.text}" />
    {/each}
  </div>
</div>
