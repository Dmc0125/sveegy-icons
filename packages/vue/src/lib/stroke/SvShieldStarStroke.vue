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
      d="M12 4.5C9.99995 6 8.49995 7 5 7C5.00005 15 10.5 19 12 19.5C13.5 19 19 15 19 7C15.4999 7 13.9999 6 12 4.5Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
    <path
      d="M12.8333 10.5L12 9L11.1667 10.5L9.5 10.6667L10.8333 12L10.1667 14L12 12.8333L13.8333 14L13.1667 12L14.5 10.6667L12.8333 10.5Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>