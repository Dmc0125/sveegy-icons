<script lang="ts" setup>
const props = defineProps<{
  size?: string
  color?: string
  strokeWidth?: string
}>()
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    :style="`width: ${props.size}; height: ${props.size}; color: ${props.color}`"
  >
    <path
      d="M12 19.5C12 19.5 6.15851 15.4864 5 11.5C4.61469 10.1741 4.50001 9.5 4.5 7.99999C4.5 5.99999 6.00001 4.5 8.00008 4.49997C10.5 4.49994 11.5 6.00001 12 7.50001C12.5 6.00001 13.5 4.49995 15.9999 4.49998C18 4.49997 19.4998 6 19.4999 8.00001C19.5 9.49999 19.3853 10.1741 19 11.5C17.8415 15.4864 12 19.5 12 19.5Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>