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
    d="M20 5C20 4.44772 19.5523 4 19 4L5 4C4.44771 4 4 4.44771 4 5L4 19C4 19.5523 4.44771 20 5 20L19 20C19.5523 20 20 19.5523 20 19L20 5ZM13.8536 8.35355C14.0488 8.15829 14.0488 7.84171 13.8536 7.64645C13.6583 7.45118 13.3417 7.45118 13.1465 7.64645L9.14646 11.6464C8.9512 11.8417 8.9512 12.1583 9.14646 12.3536L13.1465 16.3536C13.3417 16.5488 13.6583 16.5488 13.8536 16.3536C14.0488 16.1583 14.0488 15.8417 13.8536 15.6464L10.2071 12L13.8536 8.35355Z"
    fill="currentColor"
  />
</svg>
