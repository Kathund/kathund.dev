<script lang="ts">
  import { onMount } from 'svelte';

  let utc8Time: string = $state('UNKNOWN');
  let time: string = $state('UNKNOWN');
  let timeDifference: string = $state('UNKNOWN');

  function updateTime() {
    const settings: Record<string, any> = {
      hour12: false,
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const now = new Date();

    time = new Intl.DateTimeFormat('en-US', settings).format(now);
    utc8Time = new Intl.DateTimeFormat('en-US', { ...settings, timeZone: 'Australia/Perth' }).format(now);

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

<div>
  <p>Kathund Time: {utc8Time}</p>
  <p>Your Time: {time}</p>
  <p>You are <span class="text-ctp-red text-bold">{timeDifference}</span> Kathund</p>
</div>
