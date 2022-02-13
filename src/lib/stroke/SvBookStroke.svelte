<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M12 6C10.5 4.5 10 4.5 4.5 4.5V18C10 18 10.5 18 12 19.5M12 6C12 11.2721 12 14.2279 12 19.5M12 6C13.5 4.5 14 4.5 19.5 4.5V18C14 18 13.5 18 12 19.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>