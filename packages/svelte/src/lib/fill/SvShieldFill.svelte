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
    d="M12 4C10 5.5 8 6.5 4.5 6.5C4.5 15.5 10 19 12 20C14 19 19.5 15.5 19.5 6.5C16 6.5 14 5.5 12 4Z"
    fill="currentColor"
  />
</svg>
