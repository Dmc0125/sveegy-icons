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
      d="m14 7 1.793-1.793a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414L17 10m-3-3-9.207 9.207a1 1 0 0 0-.293.707V19.5h2.586a1 1 0 0 0 .707-.293L17 10m-3-3 3 3"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>