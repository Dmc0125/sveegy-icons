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
      d="M16 17.5H8C7 17.5 4.5 16.5001 4.5 13.5001C4.5 10.5 7 9.50004 8 9.50008C8 8.50003 9.5 5.62512 13 6.50003C16.5 7.37493 16 10 16 11C17 11 19.5 11.5 19.5 14.5C19.5 17.4999 17.0003 17.5 16.0002 17.5H16Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>