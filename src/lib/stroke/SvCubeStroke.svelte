<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M4.50002 8L12 4.5L19.5 8M4.50002 8L12 11.5M4.50002 8V16L12 19.5M12 11.5L19.5 8M12 11.5L12 19.5M19.5 8V16L12 19.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>