<script lang="ts">
  import { randomCase } from '../lib/misc';
  import Link from './Link.svelte';

  export interface PersonProps {
    name: string;
    github?: string;
    site?: string;
    note?: string;
    shouldRandomCase?: boolean;
  }

  let { name, github, site, note, shouldRandomCase }: PersonProps = $props();
  github = `https://github.com/${github ?? name}`;

  function randomizeName() {
    name = shouldRandomCase === true ? randomCase(name) : name;
  }

  randomizeName();
</script>

<div on:mouseover={randomizeName}>
  <div class="flex flex-row items-baseline gap-2">
    <Link href={site ?? github} text="- {name}" />
    {#if note !== undefined}
      <p class="text-xs text-ctp-text/30">{note}</p>
    {/if}
  </div>
  <div class="pl-8 text-sm text-ctp-text/60 flex flex-col">
    {#if site !== undefined}
      <Link href={site} text="- Site" />
    {/if}
    <Link href={github} text="- GitHub" />
  </div>
</div>
