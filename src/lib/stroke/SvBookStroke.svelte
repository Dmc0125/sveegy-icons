<script lang="ts">
let color = 'currentColor'
let size = '100%'
let className = ''

$: stylingProps = (
  className.length
  ? { class: className }
  : { style: `color: ${color}; width: ${size}; height: ${size};` }
)

export let strokeWidth = '1px'
export {
  className as class,
  color,
  size,
}
</script>

<svg {...stylingProps} viewBox="0 0 24 24" fill="none">
  <path
    d="M12 6C10.5 4.5 10 4.5 4.5 4.5V18C10 18 10.5 18 12 19.5M12 6C12 11.2721 12 14.2279 12 19.5M12 6C13.5 4.5 14 4.5 19.5 4.5V18C14 18 13.5 18 12 19.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>
