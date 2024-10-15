<script>
  $: innerHeight = 0
  $: height[3] = innerHeight;

  let
    height = [
      /* Is dragged??      [0] */ false,
      /* Min drag/Nav      [1] */ 30,
      /* Outer height      [2] */ 15,
      /* Max drag height   [3] */ 0,
      /* Margin Top        [4] */ 30,
      /* inner  height     [5] */ 0,
      /* padding * 2       [6] */ 16
    ],

    // Y, Offset
    mouse = [0, 10],
    container;

  const update = e => {
  // Hiirele/Puudutus kõrgus ekraanil + Offset
    let client_y = height[3] - (e.clientY || e.touches?.[0]?.clientY) + mouse[1];

  // Maksimaalne võimalik tõmme
    let max_drag = Math.min(height[3] - height[4], height[5] + height[1])

  // Piira `client_y`, et see oleks väiksem või võrdne `max_drag`
    client_y = Math.min(client_y, max_drag);

  // Hoiab draweri min-max vahel
    mouse[0] = Math.max(height[1], client_y) };

  $: height[2] = height[0] == true ? mouse[0] : height[2]; 


  function dragMe(node) {
  const startDrag = (event) => {
    // Kontrolli, kas sihtmärk on otseselt nav, mitte selle sees olev element
    if (event.target === node) {
      height[0] = true;
      document.body.style.cursor = 'grabbing';
    }
  };

  const stopDrag = () => {
    height[0] = false;
    document.body.style.cursor = 'auto';
  };

  // Hiire sündmused
  node.addEventListener('mousedown', startDrag);
  document.addEventListener('mouseup', stopDrag);

  // Puute sündmused mobiili jaoks
  node.addEventListener('touchstart', startDrag);
  document.addEventListener('touchend', stopDrag);
}

  // Funktsioon, et saada elemendi täis kõrgus
  
  const getFullHeight = () => {
    if (container) {
      height[5] = container.scrollHeight; // Määrame täis kõrguse
    }
  };

  import { onMount } from 'svelte';
  onMount(() => {
    getFullHeight(); // Algse kõrguse määramine
    const observer = new ResizeObserver(getFullHeight);
    observer.observe(container); // Jälgi sisu muutusi

    return () => {
      observer.disconnect(); // Puhasta jälgimine
    };
  });

  function up_down(){
    const referenceNumber = height[2];
    const num1 = height[1];
    const num2 = height[5] + height[1];

    const distance1 = Math.abs(referenceNumber - num1); // vahemaa 4 ja 1 vahel
    const distance2 = Math.abs(referenceNumber - num2); // vahemaa 4 ja 10 vahel

    if (distance1 > distance2) { height[2] = num1 } 
    else if (distance2 > distance1) { height[2] = num2 } 
    else { height[2] = num1 }
  }

  import { sidebar } from '$lib/store/svelte_store';
</script>

<svelte:window on:mousemove={update} on:touchmove={update} bind:innerHeight />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section id="drawer" style="--min: {height[1]}px; --height: {height[2]}px; --max: {height[5]}px; --padding: {height[6]}px">
  <nav use:dragMe>
    {#if $sidebar}
      <button popovertarget="menu">Menu</button>
    {/if}
    
    <button on:click={()=>{up_down()}}>Works</button></nav>
  <div bind:this={container}>
    <slot>
      <samp>Unfortunately, there is no content to display...</samp>
    </slot>
  </div>
</section>

<style lang="scss">
  section#drawer {
    height: clamp(var(--min), var(--height), calc(var(--max) + var(--min))); // + var(--padding)
    user-select: none;
    color-scheme: dark;
    position: fixed;
    bottom: 0;
    
    
    z-index: 88;

    @media (min-width: 800px){
      right: 8px;
      width: 500px;
    }

    @media (max-width: 800px){
      right: 0;
      width: 100%;
    }
  }

  nav {
    border-top: 1px solid #111;
    box-shadow: 0 0 5px #000;
    height: var(--min);
    background: #000;
    touch-action: none;
    padding: 0 5px;
    gap: 5px;
    display: flex;
    align-items: center;

    @media (min-width: 800px){
      border-radius: 5px 5px 0 0;
  } }

  div {
    backdrop-filter: invert(1) blur(10px);
    user-select: none;
    overflow-y: auto;
    color: #222;
    height: calc(var(--height) - var(--min) - var(--padding));
    padding: calc(var(--padding) / 2) 15px;

    &::-webkit-scrollbar { display: none; }

  }
</style>
