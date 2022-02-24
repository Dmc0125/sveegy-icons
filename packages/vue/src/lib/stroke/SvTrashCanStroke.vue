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
      d="M10.5 11.5V15.5M4.5 8.5H6.5H4.5ZM19.5 8.5H17.5H19.5ZM17.5 8.5V18.5C17.5 19.0523 17.0523 19.5 16.5 19.5H7.5C6.94771 19.5 6.5 19.0523 6.5 18.5V8.5H17.5ZM17.5 8.5H16H17.5ZM6.5 8.5H8H6.5ZM8 8.5V6.5C8 5.94772 8.44772 5.5 9 5.5H15C15.5523 5.5 16 5.94772 16 6.5V8.5H8ZM8 8.5H16H8ZM13.5 11.5V15.5V11.5Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>