<script lang="ts">
  import { onMount } from 'svelte';
  import { getKathundTime } from '../../utils/time';

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
