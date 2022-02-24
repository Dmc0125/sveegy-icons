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
      d="M12 6C10.5 4.5 10 4.5 4.5 4.5V18C10 18 10.5 18 12 19.5M12 6C12 11.2721 12 14.2279 12 19.5M12 6C13.5 4.5 14 4.5 19.5 4.5V18C14 18 13.5 18 12 19.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>