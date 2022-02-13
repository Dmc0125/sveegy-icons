<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M12 17a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>