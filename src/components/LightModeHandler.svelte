<script lang="ts">
  import { onMount } from 'svelte';

  let enabled = false;

  function theme(isLight: boolean) {
    document.documentElement.classList.toggle('mocha', !isLight);
    document.documentElement.classList.toggle('latte', isLight);
    enabled = isLight;
    localStorage.setItem('light', String(isLight));
  }

  function toggle() {
    theme(!enabled);
  }

  onMount(() => {
    enabled = document.documentElement.classList.contains('latte');
  });
</script>

<button class="text-ctp-sapphire hover:cursor-pointer" onclick={toggle}>
  Toggle {enabled ? 'Dark' : 'Light'} Mode
</button>
