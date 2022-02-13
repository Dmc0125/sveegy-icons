<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M4.5 8H7C7.55228 8 8 7.55228 8 7V4.5M16 4.5V7C16 7.55228 16.4477 8 17 8H19.5M16 19.5V17C16 16.4477 16.4477 16 17 16H19.5M4.5 16H7C7.55228 16 8 16.4477 8 17V19.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>