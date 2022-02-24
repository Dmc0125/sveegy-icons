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
      d="M8 13.5L4 9L9 8.5L12 4L15 8.5L20 9L16 13.5L18 20L12 16.5L6 20L8 13.5Z"
      fill="currentColor"
    />
  </svg>
</template>