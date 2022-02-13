<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M18 19.5C13.8421 19.5 7.84565 19.5 5.49686 19.5C4.94457 19.5 4.5 19.0523 4.5 18.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H15.5C16.0523 4.5 16.5 4.94772 16.5 5.5V12.5M18 19.5C19.5 19.5 19.5 18 19.5 18V13.5C19.5 12.9477 19.0523 12.5 18.5 12.5H16.5M18 19.5C16.5 19.5 16.5 18 16.5 18V12.5M7 8H13M7 10H11M7 13H12M7 15H9.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>