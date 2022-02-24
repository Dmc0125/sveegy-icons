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
    d="M19.5 5V8.29289C19.5 8.73835 18.9614 8.96143 18.6465 8.64645L15.3536 5.35355C15.0386 5.03857 15.2617 4.5 15.7071 4.5H19C19.2762 4.5 19.5 4.72386 19.5 5Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    d="M17.3536 7.35359L13.8536 10.8536C13.6583 11.0489 13.3417 11.0489 13.1464 10.8536C12.9512 10.6583 12.9512 10.3417 13.1464 10.1465L16.6464 6.64648L17.3536 7.35359Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    d="M6.5 8C6.5 7.17157 7.17157 6.5 8 6.5H12.5C12.7761 6.5 13 6.72386 13 7C13 7.27614 12.7761 7.5 12.5 7.5H8C7.72386 7.5 7.5 7.72386 7.5 8V16C7.5 16.2761 7.72386 16.5 8 16.5H16C16.2761 16.5 16.5 16.2761 16.5 16V11.5C16.5 11.2239 16.7239 11 17 11C17.2761 11 17.5 11.2239 17.5 11.5V16C17.5 16.8284 16.8284 17.5 16 17.5H8C7.17157 17.5 6.5 16.8284 6.5 16V8Z"
    fill="currentColor"
  />
</svg>
