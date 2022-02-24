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
    d="M4 19V16.4142C4 16.149 4.10536 15.8946 4.29289 15.7071L13.1464 6.85356L17.1464 10.8536L8.29289 19.7071C8.10536 19.8946 7.851 20 7.58579 20H5C4.44772 20 4 19.5523 4 19ZM17.8536 10.1464L18.5858 9.41422C19.3668 8.63317 19.3668 7.36684 18.5858 6.58579L17.4142 5.41422C16.6332 4.63317 15.3668 4.63317 14.5858 5.41422L13.8536 6.14645L17.8536 10.1464Z"
    fill="currentColor"
  />
</svg>
