<script lang="ts">
  import { onMount } from 'svelte';

  let enabled = false;

  function theme(isLight: boolean) {
    document.body.classList.toggle('mocha', !isLight);
    document.body.classList.toggle('latte', isLight);
    enabled = isLight;
    localStorage.setItem('light', String(isLight));
  }

  function toggle() {
    theme(!enabled);
  }

  onMount(() => {
    const stored = localStorage.getItem('light');
    if (stored !== null) {
      theme(stored === 'true');
    } else {
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      theme(prefersLight);
    }
  });
</script>

<button class="text-ctp-sapphire hover:cursor-pointer" onclick={toggle}>
  Toggle {enabled ? 'Dark' : 'Light'} Mode
</button>
