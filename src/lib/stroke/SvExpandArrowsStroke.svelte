<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M4.5 4.5H8M4.5 4.5V8M4.5 4.5L9 9M19.5 8V4.5M19.5 4.5H16M19.5 4.5L15 9M4.5 16V19.5M4.5 19.5H8M4.5 19.5L9 15M19.5 19.5V16M19.5 19.5H16M19.5 19.5L15 15"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>