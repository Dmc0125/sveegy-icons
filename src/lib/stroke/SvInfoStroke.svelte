<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M13 10.5H11C10.4477 10.5 10 10.9477 10 11.5V18.5C10 19.0523 10.4477 19.5 11 19.5H13C13.5523 19.5 14 19.0523 14 18.5V11.5C14 10.9477 13.5523 10.5 13 10.5ZM10 6.5C10 7.60457 10.8954 8.5 12 8.5C13.1046 8.5 14 7.60457 14 6.5C14 5.39543 13.1046 4.5 12 4.5C10.8954 4.5 10 5.39543 10 6.5Z"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>