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
    d="M18.5 20V8.5H8C8 8.5 5.5 8.5 5.5 7V18C5.5 20 8 20 8 20H18.5Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    d="M8 4C8 4 5.5 4 5.5 6C5.5 8 8 8 8 8H18.5L16 4H8Z"
    fill="currentColor"
  />
</svg>
