<script lang="ts">
  import Tag, { type TagProps } from './Tag.svelte';

  let { title, tags }: { title: string; tags: TagProps[] } = $props();
  tags = tags.sort((a, b) => a.tag.localeCompare(b.tag));
</script>

<div class="flex flex-row flex-wrap items-center">
  <p class="pr-1 text-ctp-sapphire whitespace-nowrap">{title}:</p>
  {#each tags as tagData (tagData.tag)}
    <Tag tag={tagData.tag} href={tagData.href} />
  {/each}
</div>
