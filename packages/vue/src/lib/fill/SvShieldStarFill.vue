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
      d="M4.5 6.5C8 6.5 10 5.5 12 4C14 5.5 16 6.5 19.5 6.5C19.5 15.5 14 19 12 20C10 19 4.5 15.5 4.5 6.5ZM9 10.375L10.5 12.0625L9.75 14.5L12 13.1875L14.25 14.5L13.5 12.0625L15 10.375L13.125 10.1875L12 8.5L10.875 10.1875L9 10.375Z"
      fill="currentColor"
    />
  </svg>
</template>