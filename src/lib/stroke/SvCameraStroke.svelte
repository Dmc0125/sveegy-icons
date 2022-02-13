<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M16 10.5V8.5C16 7.94772 15.5523 7.5 15 7.5H5.5C4.94772 7.5 4.5 7.94772 4.5 8.5V15.5C4.5 16.0523 4.94772 16.5 5.5 16.5H15C15.5523 16.5 16 16.0523 16 15.5V13.5M16 10.5L19.5 9.5V14.5L16 13.5M16 10.5V13.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>