<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M4.5 4.5V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H19.5M6.5 8.5L10.7929 12.7929C11.1834 13.1834 11.8166 13.1834 12.2071 12.7929L13.7929 11.2071C14.1834 10.8166 14.8166 10.8166 15.2071 11.2071L19.5 15.5M19.5 15.5V12M19.5 15.5H16"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>