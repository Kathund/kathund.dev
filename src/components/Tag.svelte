<script lang="ts">
  import Link from './Link.svelte';

  export interface TagProps {
    tag: string;
    href?: string;
  }

  const { tag, href }: TagProps = $props();
</script>

<Link {href} className="block bg-ctp-overlay2/20 px-2 m-2 outline-ctp-lavender outline-2 rounded-xl" text={tag} />
