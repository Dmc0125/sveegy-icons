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
    d="M12 4C4.00005 4 4 7.5 4 8C4 8.5 4 12 12 12C20 12 20 8.5 20 8V7.99994C20 7.49972 19.9996 4 12 4Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    d="M4.00002 10.5C4.00002 12.5 3.49997 16 12 16C20.5 16 20 12.5 20 10.5C20 10.5 20 13 12 13C5.00002 13 4.00002 10.5 4.00002 10.5Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    d="M3.99996 14.5C3.99996 16.5 3.50003 20 12 20C20.4999 20 20 16.5 20 14.5C20 14.5 19.9999 17 12 17C4.99996 17 3.99996 14.5 3.99996 14.5Z"
    fill="currentColor"
  />
</svg>
