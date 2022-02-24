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
    d="M17.5 15.5C18.6046 15.5 19.5 16.3954 19.5 17.5 19.5 18.6046 18.6046 19.5 17.5 19.5 16.3954 19.5 15.5 18.6046 15.5 17.5 15.5 16.3954 16.3954 15.5 17.5 15.5ZM17.5 8.5C18.6046 8.5 19.5 7.60457 19.5 6.5 19.5 5.39543 18.6046 4.5 17.5 4.5 16.3954 4.5 15.5 5.39543 15.5 6.5 15.5 7.60457 16.3954 8.5 17.5 8.5ZM4.5 12C4.5 13.1046 5.39543 14 6.5 14 7.60457 14 8.5 13.1046 8.5 12 8.5 10.8954 7.60457 10 6.5 10 5.39543 10 4.5 10.8954 4.5 12ZM8 13.5 15.5 17M8 10.5 15.5 7"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>
