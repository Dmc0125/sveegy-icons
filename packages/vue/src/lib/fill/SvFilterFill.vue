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
      d="M5 4C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5ZM8 8C7.72386 8 7.5 8.22386 7.5 8.5C7.5 8.77614 7.72386 9 8 9H16C16.2761 9 16.5 8.77614 16.5 8.5C16.5 8.22386 16.2761 8 16 8H8ZM9 11.5C8.72386 11.5 8.5 11.7239 8.5 12C8.5 12.2761 8.72386 12.5 9 12.5H15C15.2761 12.5 15.5 12.2761 15.5 12C15.5 11.7239 15.2761 11.5 15 11.5H9ZM10.5 15C10.2239 15 10 15.2239 10 15.5C10 15.7761 10.2239 16 10.5 16H13.5C13.7761 16 14 15.7761 14 15.5C14 15.2239 13.7761 15 13.5 15H10.5Z"
      fill="currentColor"
    />
  </svg>
</template>