<script>
  import { site } from '$lib/store/svelte_store';
  import Drawer from '$lib/layout/drawer.svelte';

  import T from '$lib/i18n.svelte';
  
</script>



<h1>{$site.i18n.title}</h1>
<p><T name="welcome" vars={{ name: 'juku' }} /></p>
<hr>
<a href="/example">Home</a>
<hr>
<button on:click={()=>{console.log('🔴','Works??')}}>Red</button>
<button on:click={()=>{console.log('🟡','This is <b>Bold</b>')}}>Yellow</button>
<button on:click={()=>{console.log('🟢','<a href="works">Links</a> also work??')}}>Green</button>
<button on:click={()=>{console.log('⚪','Works 1234567890 123450 134567890 1234567890 1234567890 1234567890??')}}>White</button>


<Drawer />


