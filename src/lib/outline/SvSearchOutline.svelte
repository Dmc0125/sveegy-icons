<script lang="ts">
export let color = 'currentColor'
export let size = '100%'
</script>

<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    fill-rule="evenodd"
    d="M10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0 1a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
    fill="{color}"
  />
  
	<path
    fill-rule="evenodd"
    d="M14.646 14.646a.5.5 0 0 1 .708 0l4.5 4.5a.5.5 0 0 1-.708.708l-4.5-4.5a.5.5 0 0 1 0-.708Z"
    fill="{color}"
  />  
</svg>