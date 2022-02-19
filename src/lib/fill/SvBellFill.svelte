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
    d="M12 18C7 18 5 15.5 5 15.5C5 15.5 6.46883 13.5935 7 12C7.5 10.5 7.41273 9 8 8C8.93284 6.41156 10.1579 5.5 12 5.5C13.8421 5.5 15.0672 6.41156 16 8C16.5873 9 16.4394 10.5289 17 12C17.5982 13.5696 19 15.5 19 15.5C19 15.5 17 18 12 18Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    d="M9 17.5C9 17.5 9.5 20 12 20C14.5 20 15 17.5 15 17.5H13.5C13.5 17.5 13.5 19 12 19C10.5 19 10.5 17.5 10.5 17.5H9Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    d="M12 4C10 4 10 6 10 6H14C14 6 14 4 12 4Z"
    fill="currentColor"
  />
</svg>
