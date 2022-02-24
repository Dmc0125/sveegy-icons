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
    d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12ZM10.1464 15.6464C9.95117 15.8417 9.95117 16.1583 10.1464 16.3536C10.3417 16.5488 10.6583 16.5488 10.8535 16.3536L14.8535 12.3536C15.0488 12.1583 15.0488 11.8417 14.8535 11.6464L10.8535 7.64645C10.6583 7.45118 10.3417 7.45118 10.1464 7.64645C9.95117 7.84171 9.95117 8.15829 10.1464 8.35355L13.7929 12L10.1464 15.6464Z"
    fill="currentColor"
  />
</svg>
