<script lang="ts">
let color = 'currentColor'
let size = '100%'
let className = ''

$: stylingProps = (
  className.length
  ? { class: className }
  : { style: `color: ${color}; width: ${size}; height: ${size};` }
)

export {
  className as class,
  color,
  size,
}
</script>

<svg {...stylingProps} viewBox="0 0 24 24" fill="none">
  <path
    fill-rule="evenodd"
    d="M20 12.5 11.5 4H19C19.5523 4 20 4.44772 20 5V12.5ZM4 11.5 12.5 20 5 20C4.44771 20 4 19.5523 4 19L4 11.5Z"
    fill="currentColor"
  />
</svg>
