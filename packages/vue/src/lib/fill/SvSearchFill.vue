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
      d="M10.5 17C14.0899 17 17 14.0899 17 10.5C17 6.91015 14.0899 4 10.5 4C6.91015 4 4 6.91015 4 10.5C4 14.0899 6.91015 17 10.5 17Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      d="M19.1465 19.8535L15.1465 15.8536L15.8536 15.1464L19.8536 19.1464C20.0488 19.3417 20.0488 19.6583 19.8536 19.8536C19.6583 20.0488 19.3417 20.0488 19.1465 19.8535Z"
      fill="currentColor"
    />
  </svg>
</template>