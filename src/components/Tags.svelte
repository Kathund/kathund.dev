<script lang="ts">
  import Tag, { type TagProps } from './Tag.svelte';
  let { title, tags }: { title: string; tags: TagProps[] } = $props();
  tags = tags.sort((a, b) => a.tag.localeCompare(b.tag));
</script>

<div class="flex flex-row items-center">
  <p class="pr-1 text-ctp-sapphire">{title}:</p>
  {#each tags as tagData}
    <Tag tag={tagData.tag} href={tagData.href} />
  {/each}
</div>
