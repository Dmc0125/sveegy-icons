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
    d="M12.7071 4.70711L16.2929 8.29289C16.9229 8.92286 16.4767 10 15.5858 10L8.41421 10C7.52331 10 7.07714 8.92286 7.70711 8.29289L11.2929 4.70711C11.6834 4.31658 12.3166 4.31658 12.7071 4.70711Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    d="M11.5 16V10H12.5V16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16ZM4.5 16C4.77614 16 5 16.2239 5 16.5V18.5001C5 18.7762 5.22378 19 5.5 19H18.5C18.7761 19 19 18.7761 19 18.5V16.5C19 16.2239 19.2239 16 19.5 16C19.7761 16 20 16.2239 20 16.5V18.5C20 19.3284 19.3284 20 18.5 20H5.5C4.67165 20 4 19.3286 4 18.5001V16.5C4 16.2239 4.22386 16 4.5 16Z"
    fill="currentColor"
  />
</svg>
