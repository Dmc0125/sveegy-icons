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
      d="M4 12C4 12 6.5 7 12 7C17.5 7 20 12 20 12C20 12 17.5 17 12 17C6.5 17 4 12 4 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      d="M5.14645 5.14645C5.34171 4.95118 5.65829 4.95118 5.85355 5.14645L18.8536 18.1464C19.0488 18.3417 19.0488 18.6583 18.8536 18.8536C18.6583 19.0488 18.3417 19.0488 18.1464 18.8536L5.14645 5.85355C4.95118 5.65829 4.95118 5.34171 5.14645 5.14645Z"
      fill="currentColor"
    />
  </svg>
</template>