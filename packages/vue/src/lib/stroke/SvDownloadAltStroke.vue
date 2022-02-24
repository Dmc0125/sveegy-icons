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
      d="M12 16V4.5M12 16L7 11M12 16L17 11M4.5 16.5V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H18.5C19.0523 19.5 19.5 19.0523 19.5 18.5V16.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>