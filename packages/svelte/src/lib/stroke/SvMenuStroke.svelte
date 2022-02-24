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
    d="M12 17a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>
