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
      d="M5 4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5ZM8 8C7.72386 8 7.5 8.22386 7.5 8.5C7.5 8.77614 7.72386 9 8 9H16C16.2761 9 16.5 8.77614 16.5 8.5C16.5 8.22386 16.2761 8 16 8H8ZM8 11.5C7.72386 11.5 7.5 11.7239 7.5 12C7.5 12.2761 7.72386 12.5 8 12.5H13C13.2761 12.5 13.5 12.2761 13.5 12C13.5 11.7239 13.2761 11.5 13 11.5H8ZM8 15C7.72386 15 7.5 15.2239 7.5 15.5C7.5 15.7761 7.72386 16 8 16H16C16.2761 16 16.5 15.7761 16.5 15.5C16.5 15.2239 16.2761 15 16 15H8Z"
      fill="currentColor"
    />
  </svg>
</template>