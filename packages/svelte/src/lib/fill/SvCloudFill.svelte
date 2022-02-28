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
    d="M16 18H8C7 18 4 17 4 13.5C4 10.0001 6.5 8.99997 7.5 9C7.5 8.50006 9 5.4167 12.5 6C16 6.58329 16.5 9.5 16.5 10.5C17.5 10.5 20 11.5001 20 14.5C20 17.5 17 18 16 18Z"
    fill="currentColor"
  />
</svg>
