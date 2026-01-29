<script lang="ts">
  import { onMount } from 'svelte';

  let enabled = false;

  function theme(isDark: boolean) {
    document.body.classList.toggle('mocha', isDark);
    document.body.classList.toggle('latte', !isDark);
    enabled = isDark;
    localStorage.setItem('dark', String(isDark));
  }

  function toggle() {
    theme(!enabled);
  }

  onMount(() => {
    const stored = localStorage.getItem('dark');
    if (stored !== null) {
      theme(stored === 'true');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      theme(prefersDark);
    }
  });
</script>

<button class="text-ctp-sapphire hover:cursor-pointer" onclick={toggle}
  >Toggle {enabled ? 'Light' : 'Dark'} Mode</button>
