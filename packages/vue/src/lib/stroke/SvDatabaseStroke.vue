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
      d="M19.5 8C19.5 8 20 4.5 12 4.5C4.00005 4.5 4.49999 8 4.49999 8M19.5 8C19.5 8 20 11.5 12 11.5C4.00005 11.5 4.49999 8 4.49999 8M19.5 8V12M4.49999 8V12M19.5 12C19.5 12 20 15.5 12 15.5C3.99994 15.5 4.49999 12 4.49999 12M19.5 12V16C19.5 16 20 19.5 12 19.5C3.99994 19.5 4.49999 16 4.49999 16V12"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>