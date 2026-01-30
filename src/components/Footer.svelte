<script lang="ts">
  import HorizontalSeparator from './HorizontalSeparator.svelte';
  import Link from './Link.svelte';
</script>

<div>
  <HorizontalSeparator />
  <div class="w-full flex flex-row justify-between">
    <div>
      <Link href="https://discord.com/users/1276524855445164098" text="Discord: @.kathund (1276524855445164098)" />
      <p>Matrix: @kathund:matrix.org</p>
      <Link href="mailto:kathund@proton.me" text="mail: kathund@proton.me" />
    </div>
    <div class="text-right flex flex-col">
      <p>Made with <span class="text-ctp-mauve">&hearts;</span> by kathund</p>
      <Link href="https://catppuccin.com" text="Colors from Catppuccin" />
      <Link href="/kathund-pgp-public.pgp" text="PGP Public Key" external={false} />
    </div>
  </div>
</div>
