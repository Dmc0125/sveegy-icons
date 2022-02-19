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
    d="M12.4472 4.22361L20 8L12.4472 11.7764C12.1657 11.9172 11.8343 11.9172 11.5528 11.7764L4 8L11.5528 4.22361C11.8343 4.08284 12.1657 4.08284 12.4472 4.22361Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    d="M20 12L17 10.5L12.4472 12.7764C12.1657 12.9172 11.8343 12.9172 11.5528 12.7764L7 10.5L4 12L11.5528 15.7764C11.8343 15.9172 12.1657 15.9172 12.4472 15.7764L20 12Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    d="M20 16L17 14.5L12.4472 16.7764C12.1657 16.9172 11.8343 16.9172 11.5528 16.7764L7 14.5L4 16L11.5528 19.7764C11.8343 19.9172 12.1657 19.9172 12.4472 19.7764L20 16Z"
    fill="currentColor"
  />
</svg>
