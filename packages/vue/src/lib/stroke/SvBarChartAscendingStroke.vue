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
      d="M14.5 19.5H18.5C19.0523 19.5 19.5 19.0523 19.5 18.5V5.5C19.5 4.94772 19.0523 4.5 18.5 4.5H15.5C14.9477 4.5 14.5 4.94772 14.5 5.5V19.5ZM14.5 19.5H9.5M14.5 19.5V11C14.5 10.4477 14.0523 10 13.5 10H10.5C9.94772 10 9.5 10.4477 9.5 11V19.5M9.5 19.5H5.5C4.94772 19.5 4.5 19.0523 4.5 18.5V15.5C4.5 14.9477 4.94772 14.5 5.5 14.5H8.5C9.05228 14.5 9.5 14.9477 9.5 15.5V19.5Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>