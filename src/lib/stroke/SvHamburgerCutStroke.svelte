<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M4.5 8h15m-15 4h9m-9 4h15"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>