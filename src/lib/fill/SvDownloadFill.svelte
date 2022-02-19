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
    d="M11.2929 15.7929L7.70711 12.2071C7.07714 11.5771 7.52331 10.5 8.41421 10.5H15.5858C16.4767 10.5 16.9229 11.5771 16.2929 12.2071L12.7071 15.7929C12.3166 16.1834 11.6834 16.1834 11.2929 15.7929Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    d="M4.5 19C4.22386 19 4 19.2239 4 19.5C4 19.7761 4.22386 20 4.5 20V19ZM19.5 20C19.7761 20 20 19.7761 20 19.5C20 19.2239 19.7761 19 19.5 19V20ZM12.5 4.5C12.5 4.22386 12.2761 4 12 4C11.7239 4 11.5 4.22386 11.5 4.5H12.5ZM11.5 10.5V11H12.5V10.5H11.5ZM4.5 20H19.5V19H4.5V20ZM11.5 4.5V10.5H12.5V4.5H11.5Z"
    fill="currentColor"
  />
</svg>
