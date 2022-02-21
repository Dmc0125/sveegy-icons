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
    d="M12 11.5C5.5 11.5 4 20 4 20H20C20 20 18.5 11.5 12 11.5ZM15.5 7.5C15.5 9.433 13.933 11 12 11 10.067 11 8.5 9.433 8.5 7.5 8.5 5.567 10.067 4 12 4 13.933 4 15.5 5.567 15.5 7.5Z"
    fill="currentColor"
  />
</svg>
