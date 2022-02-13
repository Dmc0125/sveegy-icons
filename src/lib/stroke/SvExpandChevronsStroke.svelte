<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M4.5 8V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H8M16 4.5H18.5C19.0523 4.5 19.5 4.94772 19.5 5.5V8M19.5 16V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H16M4.5 16V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H8"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>