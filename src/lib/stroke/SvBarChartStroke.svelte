<script lang="ts">
export let size: string = '100%'
export let color: string = 'currentColor'
export let strokeWidth: string = '1px'
</script>
  
<svg style="color: {color}; width: {size}; height: {size}" viewBox="0 0 24 24" fill="none">
  <path
    d="M14.5 19.5H18.5C19.0523 19.5 19.5 19.0523 19.5 18.5V15.5C19.5 14.9477 19.0523 14.5 18.5 14.5H15.5C14.9477 14.5 14.5 14.9477 14.5 15.5V19.5ZM14.5 19.5H9.5M14.5 19.5V5.5C14.5 4.94772 14.0523 4.5 13.5 4.5H10.5C9.94772 4.5 9.5 4.94772 9.5 5.5V19.5M9.5 19.5H5.5C4.94772 19.5 4.5 19.0523 4.5 18.5V11C4.5 10.4477 4.94772 10 5.5 10H8.5C9.05228 10 9.5 10.4477 9.5 11V19.5Z"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="{strokeWidth}"
  />
</svg>