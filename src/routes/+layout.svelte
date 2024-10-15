<script>
  import { onMount } from 'svelte';
  import { navigating } from '$app/stores';
  import { site } from '$lib/store/svelte_store';

  import "$lib/style/main.scss"
  import '$lib/store/console_store.js';

  let loading = true

  onMount( async () => {
    if($site?.i18n) setTimeout(() => { loading = false }, 2000)
  } )


  
  import Header from '$lib/layout/header.svelte'
  import Sidebar from '$lib/layout/sidebar.svelte'
  import Load from '$lib/config/site.svelte' // SEO & I18N
  import Notifications from '$lib/layout/notifications.svelte';
</script>

<Notifications />
<Load />
<Sidebar />


<main class:loading={$navigating || loading}>
  <Header />
  <center >
    <slot />
  </center>
</main>





<style>
  .loading::before {
    content: "";
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    z-index: 99;
    background: url("https://extaas.com/loading.gif") #000 no-repeat center center;
    animation: blink 2s linear infinite;
  }

  @keyframes blink {
    0%, 100% {background-color: #000;}
    50% {background-color: #111;}
  }
</style>

