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
      d="M5 6H8.5M19 6H15.5M12 4.5V19.5M12 19.5H7.5M12 19.5H16.5M8.5 6L10.5 11.5C10.5 11.5 9.37324 12.5 8.5 12.5C7.62676 12.5 6.5 11.5 6.5 11.5L8.5 6ZM8.5 6H15.5M15.5 6L17.5 11.5C17.5 11.5 16.3732 12.5 15.5 12.5C14.6268 12.5 13.5 11.5 13.5 11.5L15.5 6Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>