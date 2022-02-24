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
    d="M5 4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5ZM16.3536 9.68689C16.5488 9.49162 16.5488 9.17504 16.3536 8.97978C16.1583 8.78452 15.8417 8.78452 15.6464 8.97978L10.6667 13.9596L8.35355 11.6464C8.15829 11.4512 7.84171 11.4512 7.64645 11.6464C7.45118 11.8417 7.45118 12.1583 7.64645 12.3536L10.3131 15.0202C10.4069 15.114 10.5341 15.1667 10.6667 15.1667C10.7993 15.1667 10.9265 15.114 11.0202 15.0202L16.3536 9.68689Z"
    fill="currentColor"
  />
</svg>
