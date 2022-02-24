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
      d="M6 7.5H5.5C4.94772 7.5 4.5 7.05228 4.5 6.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H18.5C19.0523 4.5 19.5 4.94772 19.5 5.5V6.5C19.5 7.05228 19.0523 7.5 18.5 7.5H18M6 7.5V18.5C6 19.0523 6.44772 19.5 7 19.5H17C17.5523 19.5 18 19.0523 18 18.5V7.5M6 7.5H18M8.5 11.5H15.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>