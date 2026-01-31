<script lang="ts">
  import { onMount } from 'svelte';
  import { getKathundTime } from '../../utils/time';

  let userTime: string = $state('UNKNOWN');

  function updateTime() {
    userTime = getKathundTime();
  }

  onMount(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  });
</script>

{userTime}
