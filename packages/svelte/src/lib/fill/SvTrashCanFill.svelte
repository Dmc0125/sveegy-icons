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
    d="M4 8.5C4 8.22386 4.22386 8 4.5 8H19.5C19.7761 8 20 8.22386 20 8.5C20 8.77614 19.7761 9 19.5 9H4.5C4.22386 9 4 8.77614 4 8.5Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    d="M9 6C8.72386 6 8.5 6.22386 8.5 6.5V9H7.5V6.5C7.5 5.67157 8.17157 5 9 5H15C15.8284 5 16.5 5.67157 16.5 6.5V9H15.5V6.5C15.5 6.22386 15.2761 6 15 6H9ZM6 9.5V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V9.5H6ZM11 12.5C11 12.2239 10.7761 12 10.5 12 10.2239 12 10 12.2239 10 12.5V16.5C10 16.7761 10.2239 17 10.5 17 10.7761 17 11 16.7761 11 16.5V12.5ZM14 12.5C14 12.2239 13.7761 12 13.5 12 13.2239 12 13 12.2239 13 12.5V16.5C13 16.7761 13.2239 17 13.5 17 13.7761 17 14 16.7761 14 16.5V12.5Z"
    fill="currentColor"
  />
</svg>
