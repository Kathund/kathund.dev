<script lang="ts">
  import { getKathundTime } from '../../utils/time';

  let dateTimeString = $state<string>('');
  const kathundTime = $derived.by<string | Date>(() => {
    if (!dateTimeString) return '-'
    return getKathundTime(new Date(dateTimeString), { hideSecond: true });
  });
</script>

<p class="text-xl">Input a time: <input type="datetime-local" bind:value={dateTimeString} /></p>
<p>That is <span class="text-ctp-red">{kathundTime}</span> in Kathund time</p>
