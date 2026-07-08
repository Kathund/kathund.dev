<script lang="ts">
  import { getKathundTime } from '../../lib/time';
  import { onMount } from 'svelte';

  let kathundtime: string = $state('UNKNOWN');

  function updateTime() {
    kathundtime = getKathundTime();
  }

  onMount(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  });
</script>

{kathundtime}
