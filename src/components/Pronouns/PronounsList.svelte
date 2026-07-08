<script lang="ts">
  import type { PronounsListComponentData } from '../../lib/pronouns';
  import { twMerge } from 'tailwind-merge';
  import Pronoun from './Pronoun.svelte';

  export interface PronounsListProps extends PronounsListComponentData {
    right: boolean;
  }

  const { title, items, big, right }: PronounsListProps = $props();
</script>

<div class={twMerge(right ? 'text-right' : 'text-left', 'flex flex-col')}>
  <p class={twMerge(big ? 'text-3xl' : 'text-xl')}>{title}</p>
  <div>
    {#each items as item (item.title)}
      <Pronoun key={item.key} title={item.title} {right} />
    {/each}
  </div>
</div>
