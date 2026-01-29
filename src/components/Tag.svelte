<script lang="ts">
  export interface TagProps {
    tag: string;
    href?: string;
  }

  let { tag, href }: TagProps = $props();
</script>

<a {href} target="_blank" class="block bg-ctp-overlay2/20 px-2 m-2 outline-ctp-lavender outline-2 rounded-xl">
  <div>{tag}</div>
</a>
