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
      d="M12 20C16.4183 20 20 16.4183 20 12H12V4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      d="M20 11C20 7.13401 16.866 4 13 4V11H20Z"
      fill="currentColor"
    />
  </svg>
</template>