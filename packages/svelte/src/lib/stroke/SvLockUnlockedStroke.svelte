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
    d="M8.5 10H6C5.44772 10 5 10.4477 5 11V18.5C5 19.0523 5.44772 19.5 6 19.5H18C18.5523 19.5 19 19.0523 19 18.5V11C19 10.4477 18.5523 10 18 10H15.5H8.5ZM8.5 10V7.5C8.5 5.84315 9.84315 4.5 11.5 4.5H12.5C14.1569 4.5 15.5 5.84315 15.5 7.5V8"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>
