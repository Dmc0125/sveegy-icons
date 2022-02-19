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
    d="M20 5C20 4.44772 19.5523 4 19 4L5 4C4.44771 4 4 4.44771 4 5L4 19C4 19.5523 4.44771 20 5 20L19 20C19.5523 20 20 19.5523 20 19L20 5ZM15.8536 12.3536C16.0488 12.1583 16.0488 11.8417 15.8536 11.6465L12.3536 8.14645C12.1583 7.95118 11.8417 7.95118 11.6464 8.14645C11.4512 8.34171 11.4512 8.65829 11.6464 8.85355L14.2929 11.5L8.50001 11.4999C8.22386 11.4999 8 11.7238 8 11.9999C8 12.2761 8.22385 12.4999 8.49999 12.4999L14.2929 12.5L11.6464 15.1465C11.4512 15.3417 11.4512 15.6583 11.6464 15.8536C11.8417 16.0488 12.1583 16.0488 12.3536 15.8536L15.8536 12.3536Z"
    fill="currentColor"
  />
</svg>
