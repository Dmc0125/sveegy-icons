<script lang="ts" setup>
const props = defineProps<{
  size?: string
  color?: string
}>()
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    :style="`width: ${props.size}; height: ${props.size}; color: ${props.color}`"
  >
    <path
      fill-rule="evenodd"
      d="M5 8V19C5 19.5523 5.44771 20 6 20H15C15.5523 20 16 19.5523 16 19V8C16 7.44772 15.5523 7 15 7H6C5.44772 7 5 7.44772 5 8Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      d="M9 5V6H16C16.5523 6 17 6.44772 17 7V16.5H18C18.5523 16.5 19 16.0523 19 15.5V5C19 4.44772 18.5523 4 18 4H10C9.44772 4 9 4.44772 9 5Z"
      fill="currentColor"
    />
  </svg>
</template>