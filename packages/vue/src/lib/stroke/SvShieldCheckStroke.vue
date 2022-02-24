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
      d="M8.5 12L11 14.5L15.5 10M5 7C8.49995 7 9.99995 6 12 4.5C13.9999 6 15.4999 7 19 7C19 15 13.5 19 12 19.5C10.5 19 5.00005 15 5 7Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>