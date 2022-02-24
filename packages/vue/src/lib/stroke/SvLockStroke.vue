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
      d="M8.5 10H6C5.44772 10 5 10.4477 5 11V18.5C5 19.0523 5.44772 19.5 6 19.5H18C18.5523 19.5 19 19.0523 19 18.5V11C19 10.4477 18.5523 10 18 10H15.5M8.5 10V7.5C8.5 5.84315 9.84315 4.5 11.5 4.5H12.5C14.1569 4.5 15.5 5.84315 15.5 7.5V10M8.5 10H15.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>