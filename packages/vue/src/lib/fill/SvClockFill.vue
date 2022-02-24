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
      d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12.5 7C12.5 6.72386 12.2761 6.5 12 6.5C11.7239 6.5 11.5 6.72386 11.5 7V11.5H9C8.72386 11.5 8.5 11.7239 8.5 12C8.5 12.2761 8.72386 12.5 9 12.5H12C12.2761 12.5 12.5 12.2761 12.5 12V7Z"
      fill="currentColor"
    />
  </svg>
</template>