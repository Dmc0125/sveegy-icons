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
      d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
    <path
      d="M11 15.5V12C11 11.7239 11.2239 11.5 11.5 11.5H12.5C12.7761 11.5 13 11.7239 13 12V15.5C13 15.7761 12.7761 16 12.5 16H11.5C11.2239 16 11 15.7761 11 15.5ZM12.9999 9C12.9999 9.55228 12.5522 10 11.9999 10C11.4476 10 10.9999 9.55228 10.9999 9C10.9999 8.44772 11.4476 8 11.9999 8C12.5522 8 12.9999 8.44772 12.9999 9Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>