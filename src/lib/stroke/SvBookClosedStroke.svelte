<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M6 6C6 7.5 8 7.5 8 7.5H18M6 6C6 4.5 8 4.5 8 4.5H16L18 7.5M6 6V18C6 19.5 8 19.5 8 19.5H18V7.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>