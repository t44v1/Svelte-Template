<script>
  import { site } from '$lib/store/svelte_store';
</script>

<h1>{$site.i18n.title}</h1>
<a href="/">Home</a>
<button on:click={()=>{console.log($site)}}>test</button>

<hr>

