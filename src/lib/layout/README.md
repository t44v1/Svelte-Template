# Aside
Each sidebar inner asset file must contains own language json and use `$site.lang` to update screen content.
## Setup
```
import { site } from '$lib/store/svelte_store';

let content = {
  en: {
    "title": "Hello, World!",
    "welcome": "Hi <strong>{{name}}</strong>, how are you?",
    "time": "The current time is: {{time}}"
  },
  et: {
    "title": "Tere, Maailm!",
    "welcome": "Tere <strong>{{name}}</strong>, kuidas sul läheb?",
    "time": "Praegune kellaaeg on: {{time}}"
  }
}
```

## Usage
```
{content.[key].[$site.lang]}
```