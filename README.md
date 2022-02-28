# Sveegy icons

A set of beautiful icons in multiple styles

## Documentation

- Full documentation can be accessed on [Sveegy](https://sveegy.vercel.app/docs)

## Packages

- [@sveegy/icons-svelte](https://github.com/Sveegy/sveegy-icons/tree/main/packages/svelte)
- [@sveegy/icons-vue](https://github.com/Sveegy/sveegy-icons/tree/main/packages/vue)

## Development

- Run `npm run build:scripts` to transpile `.ts` script files if there have been any changes

</br>

- Run `npm run build:components` to scrape sveegy.vercel.app/icons and build components
  - Use `npm run build:components:svelte` or `npm run build:components:vue` to run the command only for specified package

</br>

- Run `npm run package --ws` to create package for both packages
  - Swap `--ws` with `-w packages/svelte` or `-w packages/vue` run run only for specified package

</br>

- Run `npm publish --access public` from packages directory to publish a package