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
    d="M4.5 15V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H18.5C19.0523 19.5 19.5 19.0523 19.5 18.5V5.5C19.5 4.94772 19.0523 4.5 18.5 4.5H5.5C4.94772 4.5 4.5 4.94772 4.5 5.5V15ZM4.5 15L7.02422 12.2463C8.61939 10.5061 11.3668 10.5187 12.946 12.2733L19 19M16 9V9C16.5523 9 17 8.55228 17 8V8C17 7.44772 16.5523 7 16 7V7C15.4477 7 15 7.44772 15 8V8C15 8.55228 15.4477 9 16 9Z"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>
