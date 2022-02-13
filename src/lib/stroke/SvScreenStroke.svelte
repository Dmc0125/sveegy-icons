<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M10.5 14.5H5.5C4.94772 14.5 4.5 14.0523 4.5 13.5V6.5C4.5 5.94772 4.94772 5.5 5.5 5.5H18.5C19.0523 5.5 19.5 5.94772 19.5 6.5V13.5C19.5 14.0523 19.0523 14.5 18.5 14.5H13.5M10.5 14.5L8.5 18.5H15.5L13.5 14.5M10.5 14.5H13.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>