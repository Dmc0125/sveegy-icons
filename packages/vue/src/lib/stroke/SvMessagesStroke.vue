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
      d="M4.5 8.5V7.5C4.5 6.94772 4.94772 6.5 5.5 6.5H18.5C19.0523 6.5 19.5 6.94772 19.5 7.5V8.5M4.5 8.5V16.5C4.5 17.0523 4.94772 17.5 5.5 17.5H18.5C19.0523 17.5 19.5 17.0523 19.5 16.5V8.5M4.5 8.5L12 13L19.5 8.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>