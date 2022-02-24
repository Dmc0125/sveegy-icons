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
      d="M5.99999 12.8264V19C5.99999 19.5523 6.44771 20 6.99999 20H9.49999C10.0523 20 10.5 19.5523 10.5 19V16C10.5 15.4477 10.9477 15 11.5 15H12.5C13.0523 15 13.5 15.4477 13.5 16V19C13.5 19.5523 13.9477 20 14.5 20H17C17.5523 20 18 19.5523 18 19V12.8264C18 12.37 18.37 12 18.8264 12C19.5863 12 19.9434 11.0608 19.3754 10.5559L12.6644 4.59054C12.2855 4.25376 11.7145 4.25376 11.3356 4.59055L4.62457 10.556C4.05663 11.0608 4.41372 12 5.1736 12C5.63 12 5.99999 12.37 5.99999 12.8264Z"
      fill="currentColor"
    />
  </svg>
</template>