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
    d="M5.5 9.99996C5.5 9.99996 7.5 6 12 6 16.5 6 18.5 9.99996 18.5 9.99996M5.5 9.99996V6.49996M5.5 9.99996H9M5.5 14C5.5 14 7.5 18 12 18 16.5 18 18.5 14 18.5 14M18.5 14V17.5M18.5 14H15"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>
