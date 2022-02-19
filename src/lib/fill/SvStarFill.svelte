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
    d="M8 13.5L4 9L9 8.5L12 4L15 8.5L20 9L16 13.5L18 20L12 16.5L6 20L8 13.5Z"
    fill="currentColor"
  />
</svg>
