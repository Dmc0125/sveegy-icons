<script lang="ts" setup>
const props = defineProps<{
  size?: string
  color?: string
}>()
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    :style="`width: ${props.size}; height: ${props.size}; color: ${props.color}`"
  >
    <path
      fill-rule="evenodd"
      d="M5 4H19C19.5523 4 20 4.44772 20 5V15C20 15.5523 19.5523 16 19 16H12.3028C12.1054 16 11.9123 16.0584 11.7481 16.1679L6 20L7.5 16H5C4.44772 16 4 15.5523 4 15V5C4 4.44772 4.44772 4 5 4ZM8.5 9C7.94772 9 7.5 9.44772 7.5 10C7.5 10.5523 7.94772 11 8.5 11C9.05228 11 9.5 10.5523 9.5 10C9.5 9.44772 9.05228 9 8.5 9ZM12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9ZM15.5 9C14.9477 9 14.5 9.44772 14.5 10C14.5 10.5523 14.9477 11 15.5 11C16.0523 11 16.5 10.5523 16.5 10C16.5 9.44772 16.0523 9 15.5 9Z"
      fill="currentColor"
    />
  </svg>
</template>