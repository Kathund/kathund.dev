<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  let isHovered: boolean = $state(false);
  let x: number = $state(0);
  let y: number = $state(0);

  function portal(node: HTMLElement) {
    document.body.appendChild(node);
    return {
      destroy: () => {
        if (node.parentNode) node.parentNode.removeChild(node);
      }
    };
  }

  function mouseOver(event: MouseEvent) {
    isHovered = true;
    x = event.pageX;
    y = event.pageY + 25;
  }

  function mouseMove(event: MouseEvent) {
    x = event.pageX;
    y = event.pageY + 25;
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

<div on:mouseover={mouseOver} on:mousemove={mouseMove} on:mouseleave={mouseLeave}>
  <slot />
</div>

{#if isHovered}
  <div
    use:portal
    style="top: {y}px; left: {x}px; transform: translateX(-50%);"
    class={twMerge(
      'absolute bg-ctp-base p-2 border-ctp-sapphire border rounded-xl drop-shadow-lg drop-shadow-ctp-sapphire/30',
      className
    )}>
    {title}
  </div>
{/if}
