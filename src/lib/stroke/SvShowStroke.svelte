<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M12 7.5C7 7.5 4.5 12 4.5 12C4.5 12 7 16.5 12 16.5C17 16.5 19.5 12 19.5 12C19.5 12 17 7.5 12 7.5Z"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
  
	<path
    d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.50002 13.3807 9.50002 12C9.50002 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>