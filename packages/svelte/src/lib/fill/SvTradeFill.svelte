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
    d="M8.64645 4.35355L5.35355 7.64645C5.15829 7.84171 5.15829 8.15829 5.35355 8.35355L8.64645 11.6464C8.96143 11.9614 9.5 11.7383 9.5 11.2929V4.70711C9.5 4.26165 8.96143 4.03857 8.64645 4.35355Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    d="M18.5 8.5H9.5V7.5H18.5C18.7761 7.5 19 7.72386 19 8 19 8.27614 18.7761 8.5 18.5 8.5ZM5 16C5 15.7239 5.22386 15.5 5.5 15.5H14.5V16.5H5.5C5.22386 16.5 5 16.2761 5 16Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    d="M14.5 12.7071V19.2929C14.5 19.7383 15.0386 19.9614 15.3536 19.6464L18.6464 16.3536C18.8417 16.1583 18.8417 15.8417 18.6464 15.6464L15.3536 12.3536C15.0386 12.0386 14.5 12.2617 14.5 12.7071Z"
    fill="currentColor"
  />
</svg>
