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
    d="M9 18L10.5 19.5M13.5 7.5H19.5M16.5 4.5V10.5M9.5 16C9.5 17.3807 8.38071 18.5 7 18.5C5.61929 18.5 4.5 17.3807 4.5 16C4.5 14.6193 5.61929 13.5 7 13.5C8.38071 13.5 9.5 14.6193 9.5 16ZM19.5 18.5V14.5C19.5 13.9477 19.0523 13.5 18.5 13.5H14.5C13.9477 13.5 13.5 13.9477 13.5 14.5V18.5C13.5 19.0523 13.9477 19.5 14.5 19.5H18.5C19.0523 19.5 19.5 19.0523 19.5 18.5ZM10.5 9.5V5.5C10.5 4.94772 10.0523 4.5 9.5 4.5H5.5C4.94772 4.5 4.5 4.94772 4.5 5.5V9.5C4.5 10.0523 4.94772 10.5 5.5 10.5H9.5C10.0523 10.5 10.5 10.0523 10.5 9.5Z"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>
