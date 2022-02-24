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
      d="M16 10.5V8.5C16 7.94772 15.5523 7.5 15 7.5H5.5C4.94772 7.5 4.5 7.94772 4.5 8.5V15.5C4.5 16.0523 4.94772 16.5 5.5 16.5H15C15.5523 16.5 16 16.0523 16 15.5V13.5M16 10.5L19.5 9.5V14.5L16 13.5M16 10.5V13.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>