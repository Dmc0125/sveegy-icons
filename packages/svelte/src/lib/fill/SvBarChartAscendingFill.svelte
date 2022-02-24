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
    d="M5 15V19C5 19.5523 5.44772 20 6 20H8C8.55228 20 9 19.5523 9 19V15C9 14.4477 8.55228 14 8 14H6C5.44772 14 5 14.4477 5 15ZM15 19V5C15 4.44772 15.4477 4 16 4H18C18.5523 4 19 4.44772 19 5V19C19 19.5523 18.5523 20 18 20H16C15.4477 20 15 19.5523 15 19ZM14 19V10.5C14 9.94772 13.5523 9.5 13 9.5H11C10.4477 9.5 10 9.94772 10 10.5V19C10 19.5523 10.4477 20 11 20H13C13.5523 20 14 19.5523 14 19Z"
    fill="currentColor"
  />
</svg>
