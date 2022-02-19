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
    d="M9.10054 12.7701L12 12L10.7164 7.16756M19.2487 10.0746C20.312 14.0779 17.9287 18.1853 13.9254 19.2486C9.92205 20.312 5.8147 17.9287 4.75135 13.9254C3.688 9.92204 6.07131 5.81469 10.0746 4.75134C14.078 3.68799 18.1853 6.07131 19.2487 10.0746Z"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>
