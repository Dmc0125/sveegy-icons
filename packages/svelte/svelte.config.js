import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    package: {
      exports: (filepath) => !filepath.match(/\.svelte/),
    },
  },
}

export default config
