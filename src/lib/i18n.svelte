<script>
  import { site } from '$lib/store/svelte_store';

  export let name; // Tõlke võtme nimi
  export let vars = {}; // Muutujad

  async function lang(i18n, vars) {
    if (i18n) {
      return Object.entries(vars).reduce((text, [key, value]) => 
          text.replace(new RegExp(`{{${key}}}`, 'g'), value), i18n);
  }
}

</script>

{#await lang($site.i18n[name], vars) then output}
  {@html output}
{/await}
