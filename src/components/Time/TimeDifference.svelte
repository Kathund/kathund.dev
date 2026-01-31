<script lang="ts">
  import { onMount } from 'svelte';

  let timeDifference: string = $state('UNKNOWN');

  function updateTime() {
    const now = new Date();

    const milliseconds =
      now.getTime() - new Date(now.toLocaleString('en-US', { timeZone: 'Australia/Perth' })).getTime();

    const total = Math.floor(milliseconds / (1000 * 60));
    const hours = Math.floor(total / 60);
    const minutes = total % 60;

    if (hours === 0) {
      timeDifference = 'in the same time zone as';
    } else {
      timeDifference = `${Math.abs(hours)} hours${minutes > 0 ? ` and ${minutes} minutes` : ''} ${
        hours > 0 ? 'ahead of' : 'behind'
      }`;
    }
  }

  onMount(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  });
</script>

<p>You are <span class="text-ctp-red text-bold">{timeDifference}</span> Kathund</p>
