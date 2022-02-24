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
    d="M5 4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5ZM12.3536 8.14645C12.1583 7.95118 11.8417 7.95118 11.6465 8.14645L8.14645 11.6464C7.95118 11.8417 7.95118 12.1583 8.14645 12.3536C8.34171 12.5488 8.65829 12.5488 8.85355 12.3536L11.5 9.70712L11.4999 15.5C11.4999 15.7761 11.7238 16 11.9999 16C12.2761 16 12.4999 15.7761 12.4999 15.5L12.5 9.70709L15.1465 12.3536C15.3417 12.5488 15.6583 12.5488 15.8536 12.3536C16.0488 12.1583 16.0488 11.8417 15.8536 11.6464L12.3536 8.14645Z"
    fill="currentColor"
  />
</svg>
