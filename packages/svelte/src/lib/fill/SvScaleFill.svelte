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
    d="M12 4C12.2761 4 12.5 4.22386 12.5 4.5V5.5H19C19.2761 5.5 19.5 5.72386 19.5 6C19.5 6.27614 19.2761 6.5 19 6.5H12.5V19H16.5C16.7761 19 17 19.2239 17 19.5C17 19.7761 16.7761 20 16.5 20H7.5C7.22386 20 7 19.7761 7 19.5C7 19.2239 7.22386 19 7.5 19H11.5V6.5H5C4.72386 6.5 4.5 6.27614 4.5 6C4.5 5.72386 4.72386 5.5 5 5.5H11.5V4.5C11.5 4.22386 11.7239 4 12 4Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    d="M6 11.5 8.5 5.5 11 11.5 10.0435 12.0739C9.09344 12.6439 7.90656 12.6439 6.95651 12.0739L6 11.5ZM13 11.5 15.5 5.5 18 11.5 17.0435 12.0739C16.0934 12.6439 14.9066 12.6439 13.9565 12.0739L13 11.5Z"
    fill="currentColor"
  />
</svg>
