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
    d="M14.5 19.5H18.5C19.0523 19.5 19.5 19.0523 19.5 18.5V5.5C19.5 4.94772 19.0523 4.5 18.5 4.5H15.5C14.9477 4.5 14.5 4.94772 14.5 5.5V19.5ZM14.5 19.5H9.5M14.5 19.5V11C14.5 10.4477 14.0523 10 13.5 10H10.5C9.94772 10 9.5 10.4477 9.5 11V19.5M9.5 19.5H5.5C4.94772 19.5 4.5 19.0523 4.5 18.5V15.5C4.5 14.9477 4.94772 14.5 5.5 14.5H8.5C9.05228 14.5 9.5 14.9477 9.5 15.5V19.5Z"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>
