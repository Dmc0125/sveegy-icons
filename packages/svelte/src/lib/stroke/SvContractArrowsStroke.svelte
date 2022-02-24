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
    d="M4.5 4.5L9 9M9 9V5.5M9 9H5.5M15 5.5V9M15 9H18.5M15 9L19.5 4.5M5.5 15H9M9 15V18.5M9 15L4.5 19.5M15 18.5V15M15 15H18.5M15 15L19.5 19.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>
