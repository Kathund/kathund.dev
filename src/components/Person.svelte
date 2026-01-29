<script lang="ts">
  export interface PersonProps {
    name: string;
    github?: string;
    site?: string;
    note?: string;
  }

  let { name, github, site, note }: PersonProps = $props();
  github = `https://github.com/${github ?? name}`;
</script>

<div>
  <div class="flex flex-row items-baseline gap-2">
    <a href={site ?? github} target="_blank">- {name}</a>
    {#if note !== undefined}
      <p class="text-xs text-ctp-text/30">{note}</p>
    {/if}
  </div>
  <div class="pl-8 text-sm text-ctp-text/60 flex flex-col">
    {#if site !== undefined}
      <a href={site} target="_blank">- Site</a>
    {/if}
    <a href={github} target="_blank">- GitHub</a>
  </div>
</div>
