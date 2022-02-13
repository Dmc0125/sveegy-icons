<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M19 15.5L12 8.5L5 15.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>