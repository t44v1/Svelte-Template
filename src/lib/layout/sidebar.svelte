<script>
  import { sidebar } from '$lib/store/svelte_store';
  import { browser } from '$app/environment';

  let elem
  $: innerWidth = 0
  $: $sidebar = innerWidth < 800
  $: set($sidebar)

  function set(boolean){
    if(browser && elem){
      if(boolean){ elem.setAttribute('popover', '') } 
      else { elem.removeAttribute('popover') } }
  }; 
  
  
</script>

<svelte:window bind:innerWidth />

<aside id="menu" bind:this={elem} popover>
  Works

</aside>

<style lang="scss">
  aside{
    &:not([popover]){
      position: fixed;
      top: 30px; left: 0px;
      height: calc(100vh - 30px - 8px * 2);
      width: calc(var(--sidebar) - 16px);
      
    }
    &[popover]{
      border: none;
      box-shadow: 0 0 5px #000;
      width: min(100% - 2em, 300px);
      height: 80vh;
      &::backdrop {
        backdrop-filter: contrast(0.7) blur(10px)}
    }
    
    
    
    background: gray;
    
    overflow: hidden scroll;
    padding: 8px;
  }
</style>