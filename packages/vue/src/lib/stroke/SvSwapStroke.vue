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
      d="M5.5 9.99996C5.5 9.99996 7.5 6 12 6 16.5 6 18.5 9.99996 18.5 9.99996M5.5 9.99996V6.49996M5.5 9.99996H9M5.5 14C5.5 14 7.5 18 12 18 16.5 18 18.5 14 18.5 14M18.5 14V17.5M18.5 14H15"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>