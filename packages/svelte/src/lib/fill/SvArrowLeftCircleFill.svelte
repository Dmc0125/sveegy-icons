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
    d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12ZM8.14647 11.6465C7.95121 11.8417 7.95121 12.1583 8.14647 12.3536L11.6465 15.8536C11.8417 16.0489 12.1583 16.0489 12.3536 15.8536C12.5488 15.6583 12.5488 15.3418 12.3536 15.1465L9.70714 12.5001L15.5 12.5001C15.7762 12.5001 16 12.2763 16 12.0001C16 11.724 15.7762 11.5001 15.5 11.5001L9.70711 11.5001L12.3536 8.85359C12.5488 8.65833 12.5488 8.34175 12.3536 8.14648C12.1583 7.95122 11.8417 7.95122 11.6465 8.14648L8.14647 11.6465Z"
    fill="currentColor"
  />
</svg>
