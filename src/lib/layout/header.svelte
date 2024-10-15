<script>
  import { language } from '$lib/store/svelte_store';
</script>

<header>
    <img src="https://extaas.com/name.png" alt="Title">
    <div>
      <select bind:value={$language}>
        {#each ['et', 'en'] as lang}
          <option value={lang}>{lang}</option>
        {/each}
      </select>
    </div>
</header>


<style lang="scss">
  header {
    position: fixed;
    top: 0; left: 0;
    width: -webkit-fill-available;
    background: #000;
    border-bottom: 1px solid #111;
    box-shadow: 0 0 5px #000;
    height: var(--head-foot);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 8px;
    
    img {      
      height: calc(var(--head-foot) - 4px) }
     }
</style>