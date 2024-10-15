<script>
  import { onMount } from 'svelte';
  import { site, language } from '$lib/store/svelte_store';
  import { page } from '$app/stores';

/* Get Browser Language */ 
  onMount(() => {
    const supported = ['en', 'et'];
    // Saame keele-eelistused kasutaja brauserist
      let languages = navigator.languages || [navigator.language];
    // Otsime esimese toetatud keele
      $language = languages.find(language => supported.includes(language.split('-')[0])) || 'en'
  })

// --- --- ---

  /* Get Aside Data */ 
  import { sitemap } from "$lib/config/pages.js"

  function current_page(url) {
    return sitemap.find(page => page.url === url) || null; // Tagasta leht või null, kui lehte ei leitud
  } 

// --- --- ---

/* Get I18N Content */ 
  async function current_lang(lang, page) {
    const translations = await import(`$lib/config/languages/${lang}.json`);
  // Tagasta vastav alamobjekt
    return translations[page]; 
  }


  export async function load() { let
    // Lihtsustab koodi
      lang = $language,
    // Leiame praeguse lehe
      page = current_page($page.url.pathname),
    // Leiame vastava tõlke
      i18n = await current_lang(lang, page?.name);
    // Uuenda tõlkeid
      $site = { page, i18n };
    // Salvesta spämm vältimiseks 

      return page
  }
  
  $: $page || $language, load()
</script>

<svelte:head>
  <meta name="theme-color" content={$site.hex}>
  <meta name="color-scheme" content="dark">
  <meta name="robots" content="index,follow">

  <link rel="alternate" href={$page.url.origin} />
  <base href={$page.url.origin} target="_parent">
  <title>{$page.url.hostname} - {$site?.page?.name}</title>
  <meta name="description" content={$site.page?.description} >
  <meta name="keywords" content={$site.page.keywords}>

<!-- SchemaOrg (https://technical$site.page.com/tools/schema-markup-generator) -->
  {@html `<script type='application/ld+json'>
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem", 
        "position": 1, 
        "name": "${$page.url.hostname}",
        "item": "${$page.url.origin}"
      },${$page.url.pathname == "/" ? null : JSON.stringify({
        "@type": "ListItem", 
        "position": 2, 
        "name": $page.url.pathname,
        "item": $page.url.href
      }) } ]
    }
  </script>`}

<!-- OpenGraph -->
  <meta property="og:site_name" content={$page.url.hostname} /> 
  <meta property="og:title" content={$page.url.hostname} />
  <meta name="twitter:title" content={$page.url.hostname}>
  <meta property="og:description" content={$site.page.description} />
  <meta name="twitter:description" content={$site.page.description} >
  <meta property="og:url" content={$page.url.href} />
  <!--<meta property="og:type" content={article ? 'article' : 'website'} />-->
  <link rel="canonical" href={$page.url.href}/>
  <meta name="publisher" content="Extaas™">
  <meta property="og:image" content="https://extaas.com/logo.png" />
  <meta property="twitter:image" content="https://extaas.com/logo.png" />
</svelte:head>