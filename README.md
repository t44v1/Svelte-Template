## Setup
- npm i @supabase/supabase-js sass resend stripe --save-dev

### SASS CONFIG (svelte.config.js)
Required for sass to work!
- import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
- const config = { preprocess: vitePreprocess() }