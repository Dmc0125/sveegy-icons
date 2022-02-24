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
      d="M17 12.002c0-4.142-3-7.5-7.5-7.5-1.5 0-2.5.5-2.5.5s5 1.498 5 7-5 7-5 7 1 .5 2.5.5c4.5 0 7.5-3.358 7.5-7.5Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>