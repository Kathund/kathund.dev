<script lang="ts">
  import { PronounsLegend, type PronounsLegendKey } from '../../lib/pronouns';
  import Tooltip from '../Tooltip.svelte';

  export interface PronounIconProps {
    key: PronounsLegendKey;
  }

  const { key }: PronounIconProps = $props();
</script>

<Tooltip title={PronounsLegend[key].title} className={PronounsLegend[key].style}>
  <span class="text-ctp-text">{PronounsLegend[key].icon}</span>
</Tooltip>
