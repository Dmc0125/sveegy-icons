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
      d="M8 14L10 11.5V17M15 17V11.5L12.5 15H16M8 4.5V6.5M16 4.5V6.5M4.5 9V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H18.5C19.0523 19.5 19.5 19.0523 19.5 18.5V9M4.5 9V6.5C4.5 5.94772 4.94772 5.5 5.5 5.5H18.5C19.0523 5.5 19.5 5.94772 19.5 6.5V9M4.5 9H19.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>