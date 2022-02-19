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
    d="M4.5 8V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H8M16 4.5H18.5C19.0523 4.5 19.5 4.94772 19.5 5.5V8M19.5 16V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H16M4.5 16V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H8"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>
