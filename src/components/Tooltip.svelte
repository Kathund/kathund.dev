<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  let isHovered: boolean = $state(false);
  let x: number = $state(0);
  let y: number = $state(0);
  let container: HTMLElement | null = $state<HTMLElement | null>(null);

  function portal(node: HTMLElement) {
    document.body.appendChild(node);
    return {
      destroy: () => {
        if (node.parentNode) node.parentNode.removeChild(node);
      }
    };
  }
  function mouseEnter() {
    if (!container) return;
    isHovered = true;
    const boundingBox = container.getBoundingClientRect();
    x = boundingBox.left + boundingBox.width / 2;
    y = boundingBox.top;
  }

  function mouseLeave() {
    isHovered = false;
  }

  export interface ToolTipProps {
    title: string;
    className?: string;
  }

  const { title, className }: ToolTipProps = $props();
</script>

<div bind:this={container} on:mouseenter={mouseEnter} on:mouseleave={mouseLeave}>
  <slot />
</div>

{#if isHovered}
  <div
    use:portal
    style="top: {y}px; left: {x}px;"
    class={twMerge(
      'absolute font-mono font-normal bg-ctp-base p-2 px-4 border-ctp-surface2 border rounded-xl -translate-x-1/2 -translate-y-full -mt-3',
      className?.replaceAll('pronouns-close-hover-gradient', 'text-ctp-pink')
    )}>
    {title}
  </div>
{/if}
