<script lang="ts">
  import HorizontalSeparator from './HorizontalSeparator.svelte';
  import Link from './Link.svelte';
</script>

<div>
  <HorizontalSeparator />
  <div class="w-full flex flex-col lg:flex-row justify-between gap-3">
    <div class="flex flex-col justify-between items-center lg:items-start">
      <p>Matrix: @kathund:matrix.org</p>
      <Link href="mailto:contact@kathund.dev" text="Email: contact@kathund.dev" />
      <Link href="https://discord.com/users/1276524855445164098" text="Discord: @.kathund" />
    </div>
    <div class="text-right flex flex-col justify-between items-center lg:items-end">
      <p>Made with <span class="text-ctp-mauve">&hearts;</span> by kathund</p>
      <Link href="https://catppuccin.com" text="Colors from Catppuccin" />
      <Link href="/kathund-pgp-public.pgp" text="PGP Public Key" external={false} />
    </div>
  </div>
</div>
