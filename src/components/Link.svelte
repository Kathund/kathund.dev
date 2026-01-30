<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export interface LinkProps {
    text: string;
    href?: string;
    className?: string;
    external?: boolean;
  }

  let { text, href, className, external }: LinkProps = $props();
  if (external === undefined) external = true;
</script>

<a {href} target={external ? '_blank' : ''} class={twMerge(href !== undefined ? 'hover:underline' : '', className)}>
  {text}
</a>
