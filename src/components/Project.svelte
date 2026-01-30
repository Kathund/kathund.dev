<script lang="ts">
  import type { TagProps } from './Tag.svelte';
  import Tags from './Tags.svelte';
  import Link from './Link.svelte';
  import Tag from './Tag.svelte';

  export interface ProjectProps {
    title: string;
    lines: string[];
    links: TagProps[];
    built: TagProps[];
    involvement?: string;
    path?: string;
  }

  const { title, lines, built, links, involvement, path }: ProjectProps = $props();
</script>

<div class="outline-ctp-pink bg-ctp-surface2/20 p-4 rounded-xl flex flex-col justify-between">
  <div>
    <div class="flex flex-row items-center justify-between">
      <div class="flex flex-row gap-2 items-center">
        <p class="text-ctp-mauve text-2xl">{title}</p>
        {#if involvement !== undefined}
          <Tag tag={involvement} />
        {/if}
      </div>
      {#if path !== undefined}
        <Link className="text-ctp-sapphire" href={path} text="Learn More" />
      {/if}
    </div>
    <div>
      {#each lines as line (line)}
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        <p>{@html line}</p>
      {/each}
    </div>
  </div>
  <div>
    <Tags title="Links" tags={links} />
    <Tags title="Built With" tags={built} />
  </div>
</div>
