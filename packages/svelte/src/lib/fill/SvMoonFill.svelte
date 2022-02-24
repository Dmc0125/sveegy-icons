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
    d="M11.5 12C11.5 7 9 5 7 4.49999C8 4 9.5 4 10 4C12 4 17.5 5.5 17.5 12C17.5 18.5 12 20 10 20C9.5 20 8 20 7 19.5C9 19 11.5 17 11.5 12Z"
    fill="currentColor"
  />
</svg>
