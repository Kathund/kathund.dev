<script lang="ts">
  import Tooltip from './Tooltip.svelte';

  export interface ButtonProps {
    alt: string;
    src: string;
    href?: string;
  }

  const { alt, src, href }: ButtonProps = $props();
</script>

<Tooltip title={alt}>
  <a {href} class="h-[31px] w-[88px]" target="_blank">
    <img {src} {alt} width="88" height="31" class="h-[31px] w-[88px]" />
  </a>
</Tooltip>
