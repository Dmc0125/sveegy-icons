<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M14.5 9L12 4.5L9.5 9L4.5 9.5L8.5 13.5L6.5 19.5L12 16L17.5 19.5L15.5 13.5L19.5 9.5L14.5 9Z"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>