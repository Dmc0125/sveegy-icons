<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M12 19.5V17M12 17V17C9.23858 17 7 14.7614 7 12V11.5M12 17V17C14.7614 17 17 14.7614 17 12V11.5M14.5 12V7C14.5 5.61929 13.3807 4.5 12 4.5V4.5C10.6193 4.5 9.5 5.61929 9.5 7V12C9.5 13.3807 10.6193 14.5 12 14.5V14.5C13.3807 14.5 14.5 13.3807 14.5 12Z"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>