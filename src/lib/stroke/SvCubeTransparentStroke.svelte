<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M12 4.5L4.5 8M12 4.5L19.5 8M12 4.5L12 6M4.5 8L12 11.5M4.5 8V16M12 11.5L19.5 8M12 11.5L12 12.5M19.5 8V16M19.5 16L12 19.5M19.5 16L17.625 15.125M12 19.5L4.5 16M12 19.5L12 12.5M4.5 16L4.544 16.0205L8.272 14.2603M12 12.5L15.75 14.25M12 12.5L10.136 13.3801M12 8V9.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>