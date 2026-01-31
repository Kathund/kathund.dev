<script lang="ts">
  import { getKathundTime, getUserTime, type TimeOptions } from '../../utils/time';

  export interface ResponseTimeProps {
    user?: boolean;
  }

  const { user }: ResponseTimeProps = $props();
  const func = user === true ? getUserTime : getKathundTime;

  const settings: TimeOptions = { hideYear: true, hideMonth: true, hideDay: true, hideSecond: true };

  const earlyTime: string = func(new Date(1769824800000), settings);
  const lateTime: string = func(new Date(1769882400000), settings);
</script>

<span class="text-ctp-pink">{earlyTime} - {lateTime}</span>
