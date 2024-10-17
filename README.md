<details>
  <summary>
    <h1>Template Setup</h1>
    <ul>
      <li>npm i</li>
      <li>npm run dev</li>
    </ul>
  </summary>

  <section>
    <h2>Project</h2>
    <ul>
      <li>npm i @supabase/supabase-js sass --save-dev</li>
      <li>
        Required for sass to work! (svelte.config.js)
        <ul>
          <li>import { vitePreprocess } from '@sveltejs/  vite-plugin-svelte';</li>
          <li>const config = { preprocess: vitePreprocess() }</li>
        </ul>
      </li>
    </ul>
  </section>
</details>

## file structure
```
src/
  hooks.server.js         // User auth
  lib/
    config/
      languages/           // Language packs
      pages.js             // Each page Seo & its optional data
      site.svelte          // I18n & Seo implementation
    layout/                // Layout components (all optional)
    store/                 // Data groups and storage
    style/                 // Style files
    i18n.svelte            // Display translations & vars
  routes/
    (public)/
      layout.server.js     // User auth data & check
      layout.svelte        // Layout of public pages
      +page.svelte
    (private)/
      layout.server.js     // User auth data
      layout.svelte        // Layout of private pages

```