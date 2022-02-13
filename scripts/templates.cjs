module.exports = {
  fill_outline: `
<script lang="ts">
export let color = 'currentColor'
export let size = '100%'
</script>

<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  {#path}  
</svg>
  `.trim(),
  stroke: `
<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  {#path}
</svg>
  `.trim(),
  strokePath:
  `<path
    d="{#d}"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />`,
  fill_outlinePath:
  `<path
    fill-rule="evenodd"
    d="{#d}"
    fill="{color}"
  />`,
}
