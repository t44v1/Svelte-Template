# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Failide struktuur
```
src/
  hooks.server.js         // Käitleb keele määramist serveripoolt
  lib/
    i18n.js               // Tõlked
  routes/
    (public)/
      layout.server.js     // Avalike lehtede serveri layout
      +page.svelte         // Avalik leht
    (private)/
      layout.server.js     // Privaatsete lehtede serveri layout
      +page.svelte         // Privaatne leht

```


## Setup
- npm i @supabase/supabase-js sass resend stripe --save-dev

### SASS CONFIG (svelte.config.js)
Required for sass to work!
- import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
- const config = { preprocess: vitePreprocess() }