<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M9.5 7.5H14.5C15.0523 7.5 15.5 7.94772 15.5 8.5V16M9.5 7.5H6.5C5.94772 7.5 5.5 7.94772 5.5 8.5V18.5C5.5 19.0523 5.94772 19.5 6.5 19.5H14.5C15.0523 19.5 15.5 19.0523 15.5 18.5V16M9.5 7.5V5.5C9.5 4.94772 9.94772 4.5 10.5 4.5H17.5C18.0523 4.5 18.5 4.94772 18.5 5.5V15C18.5 15.5523 18.0523 16 17.5 16H15.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>