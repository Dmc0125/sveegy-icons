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
    d="M18 13.5C17.1716 13.5 16.5 12.8284 16.5 12 16.5 11.1716 17.1716 10.5 18 10.5 18.8284 10.5 19.5 11.1716 19.5 12 19.5 12.8284 18.8284 13.5 18 13.5ZM12 13.5C11.1716 13.5 10.5 12.8284 10.5 12 10.5 11.1716 11.1716 10.5 12 10.5 12.8284 10.5 13.5 11.1716 13.5 12 13.5 12.8284 12.8284 13.5 12 13.5ZM6 13.5C5.17157 13.5 4.5 12.8284 4.5 12 4.5 11.1716 5.17157 10.5 6 10.5 6.82843 10.5 7.5 11.1716 7.5 12 7.5 12.8284 6.82843 13.5 6 13.5Z"
    fill="currentColor"
  />
</svg>
