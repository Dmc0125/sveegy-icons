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
    d="M4 19C4 19.5523 4.44772 20 5 20L19 20C19.5523 20 20 19.5523 20 19L20 5C20 4.44771 19.5523 4 19 4L5 4C4.44771 4 4 4.44771 4 5L4 19ZM8.14645 11.6464C7.95118 11.8417 7.95118 12.1583 8.14645 12.3535L11.6464 15.8536C11.8417 16.0488 12.1583 16.0488 12.3536 15.8536C12.5488 15.6583 12.5488 15.3417 12.3536 15.1464L9.70712 12.5L15.5 12.5001C15.7761 12.5001 16 12.2762 16 12.0001C16 11.7239 15.7761 11.5001 15.5 11.5001L9.70709 11.5L12.3536 8.85354C12.5488 8.65828 12.5488 8.3417 12.3536 8.14643C12.1583 7.95117 11.8417 7.95117 11.6464 8.14643L8.14645 11.6464Z"
    fill="currentColor"
  />
</svg>
