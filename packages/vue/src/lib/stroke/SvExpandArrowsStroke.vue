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
      d="M4.5 4.5H8M4.5 4.5V8M4.5 4.5L9 9M19.5 8V4.5M19.5 4.5H16M19.5 4.5L15 9M4.5 16V19.5M4.5 19.5H8M4.5 19.5L9 15M19.5 19.5V16M19.5 19.5H16M19.5 19.5L15 15"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>