# Layout Components
Each components inner asset file must contains own language json and use `$language` to update screen content.

## Setup
```
import { language } from '$lib/store/svelte_store';

let content = {
  en: {
    "title": "Example",
    "welcome": "sample content"
  },
  et: {
    "title": "Näide",
    "welcome": "näidis sisu"
  }
}
```

## Usage
```
{content.[$language].[key]}
```