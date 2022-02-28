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
      d="M9.5 16H8C7 16 4.5 15.0001 4.5 12.0001C4.5 9 7 8.00001 8 8.00006C8 7 9.5 4.1251 13 5C16.5 5.8749 16 8.5 16 9.49999C17 9.49999 19.5 9.99997 19.5 13C19.5 16 17 15.9999 16 16H14.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
    <path
      d="M12 12.5V19.5M12 19.5L10 18M12 19.5L14 18"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>