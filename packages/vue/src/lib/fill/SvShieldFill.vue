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
      d="M12 4C10 5.5 8 6.5 4.5 6.5C4.5 15.5 10 19 12 20C14 19 19.5 15.5 19.5 6.5C16 6.5 14 5.5 12 4Z"
      fill="currentColor"
    />
  </svg>
</template>