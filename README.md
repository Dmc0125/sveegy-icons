# Sveegy Icons

- Official docs - https://sveegy.vercel.app/docs

## Usage

```sh
npm i sveegy-icons
```

```html
<script>
import { SvHeartOutline } from 'sveegy-icons'
</script>

<div>
  <SvHeartOutline size="5rem" color="red" />
</div>
```

## Icon types

- Fill - Sv[`iconName`]Fill
- Outline - Sv[`iconName`]Outline
- Stroke - Sv[`iconName`]Stroke

- Icon names are in PascalCase

Icons and icon names are corresponding to icons on [Sveegy](https://sveegy.vercel.app/icons)

## Props

- Every icon component has `class` props, if `class` is used `size` will not be used and value of `color` will be `currentColor`

### Fill / Outline

| prop | type | required | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| size | `string` | no | `100%` | Icon size in CSS value: 100%, 2rem, etc. |
| color | `string` | no | `currentColor` | Icon color in CSS value: red, #fff, etc. |

### Stroke

| prop | type | required | default | description |
| ---- | ---- | -------- | ------- | ----------- |
| size | `string` | no | `100%` | Icon size in CSS value: 100%, 2rem, etc. |
| color | `string` | no | `currentColor` | Icon color in CSS value: red, #fff, etc. |
| strokeWidth | `string` | no | `1px` | Stroke size of icon paths in CSS value |
