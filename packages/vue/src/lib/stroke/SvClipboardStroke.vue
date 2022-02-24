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
      d="M9.5 5.5H7.5C6.94772 5.5 6.5 5.94772 6.5 6.5V18.5C6.5 19.0523 6.94772 19.5 7.5 19.5H16.5C17.0523 19.5 17.5 19.0523 17.5 18.5V6.5C17.5 5.94772 17.0523 5.5 16.5 5.5H14.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
    <path
      d="M13.5 4.5H10.5C9.94772 4.5 9.5 4.94772 9.5 5.5 9.5 6.05228 9.94772 6.5 10.5 6.5H13.5C14.0523 6.5 14.5 6.05228 14.5 5.5 14.5 4.94772 14.0523 4.5 13.5 4.5ZM9 10.5H15M9 13.5H15"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>