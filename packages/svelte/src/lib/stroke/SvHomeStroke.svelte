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
    d="M12 4.5L4.5 11.5H6.5V19.5H10V14.5H14V19.5H17.5V11.5H19.5L12 4.5Z"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>
