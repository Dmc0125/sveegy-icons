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
    d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM15.6464 13.8536C15.8417 14.0488 16.1583 14.0488 16.3536 13.8536C16.5488 13.6583 16.5488 13.3417 16.3536 13.1465L12.3536 9.14646C12.1583 8.9512 11.8417 8.9512 11.6464 9.14646L7.64645 13.1465C7.45118 13.3417 7.45118 13.6583 7.64645 13.8536C7.84171 14.0488 8.15829 14.0488 8.35355 13.8536L12 10.2071L15.6464 13.8536Z"
    fill="currentColor"
  />
</svg>
