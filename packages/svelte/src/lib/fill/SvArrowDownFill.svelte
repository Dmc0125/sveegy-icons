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
    d="M19 20C19.5523 20 20 19.5523 20 19L20 5C20 4.44771 19.5523 4 19 4L5 4C4.44772 4 4 4.44771 4 5L4 19C4 19.5523 4.44771 20 5 20L19 20ZM11.6464 15.8536C11.8417 16.0488 12.1583 16.0488 12.3535 15.8536L15.8536 12.3536C16.0488 12.1583 16.0488 11.8417 15.8536 11.6464C15.6583 11.4512 15.3417 11.4512 15.1464 11.6464L12.5 14.2929L12.5001 8.50001C12.5001 8.22386 12.2762 8 12.0001 8C11.7239 8 11.5001 8.22385 11.5001 8.49999L11.5 14.2929L8.85354 11.6464C8.65828 11.4512 8.3417 11.4512 8.14644 11.6464C7.95117 11.8417 7.95117 12.1583 8.14644 12.3536L11.6464 15.8536Z"
    fill="currentColor"
  />
</svg>
