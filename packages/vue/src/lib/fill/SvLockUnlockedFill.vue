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
      d="M4.5 10.5V19C4.5 19.5523 4.94772 20 5.5 20H18.5C19.0523 20 19.5 19.5523 19.5 19V10.5C19.5 9.94772 19.0523 9.5 18.5 9.5H5.5C4.94772 9.5 4.5 9.94772 4.5 10.5Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      d="M11.5 5C10.1193 5 9 6.11929 9 7.5V9.5H8V7.5C8 5.567 9.567 4 11.5 4H12.5C14.433 4 16 5.567 16 7.5V8C16 8.27614 15.7761 8.5 15.5 8.5C15.2239 8.5 15 8.27614 15 8V7.5C15 6.11929 13.8807 5 12.5 5H11.5Z"
      fill="currentColor"
    />
  </svg>
</template>