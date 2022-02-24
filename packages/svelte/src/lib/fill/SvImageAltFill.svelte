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
    d="M4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5ZM5 19H19L12.9488 11.9403C11.383 10.1135 8.57049 10.0725 6.95204 11.8528L5.26006 13.7139C5.09272 13.898 5 14.1378 5 14.3866V19ZM17.5 8C17.5 8.82843 16.8284 9.5 16 9.5C15.1716 9.5 14.5 8.82843 14.5 8C14.5 7.17157 15.1716 6.5 16 6.5C16.8284 6.5 17.5 7.17157 17.5 8Z"
    fill="currentColor"
  />
</svg>
