<script lang="ts">
let color = 'currentColor'
let size = '100%'
let className = ''

$: stylingProps = (
  className.length
  ? { class: className }
  : { style: `color: ${color}; width: ${size}; height: ${size};` }
)

export {
  className as class,
  color,
  size,
}
</script>

<svg {...stylingProps} viewBox="0 0 24 24" fill="none">
  <path
    fill-rule="evenodd"
    d="M4.00022 7.99989C4.07542 7.99987 4.15177 8.01687 4.22361 8.05279L12 11.941L19.7764 8.05277C19.8482 8.01686 19.9246 7.99985 19.9998 7.99988L12.0001 4L4.00022 7.99989ZM20 9.059L12.5 12.809V19.75L20 16V9.059ZM11.5 19.75V12.809L4 9.05902L4 16L11.5 19.75Z"
    fill="currentColor"
  />
</svg>
