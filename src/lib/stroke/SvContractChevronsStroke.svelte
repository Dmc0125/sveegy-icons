<script lang="ts">
let color = 'currentColor'
let size = '100%'
let className = ''

$: stylingProps = (
  className.length
  ? { class: className }
  : { style: `color: ${color}; width: ${size}; height: ${size};` }
)

export let strokeWidth = '1px'
export {
  className as class,
  color,
  size,
}
</script>

<svg {...stylingProps} viewBox="0 0 24 24" fill="none">
  <path
    d="M4.5 8H7C7.55228 8 8 7.55228 8 7V4.5M16 4.5V7C16 7.55228 16.4477 8 17 8H19.5M16 19.5V17C16 16.4477 16.4477 16 17 16H19.5M4.5 16H7C7.55228 16 8 16.4477 8 17V19.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>
