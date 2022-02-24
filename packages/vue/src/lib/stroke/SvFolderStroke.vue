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
      d="M4.5 17.5V6.5C4.5 6.22386 4.72386 6 5 6H10C10.1574 6 10.3056 6.0741 10.4 6.2L11.3 7.4C11.5833 7.77771 12.0279 8 12.5 8H19C19.2761 8 19.5 8.22386 19.5 8.5V17.5C19.5 17.7761 19.2761 18 19 18H5C4.72386 18 4.5 17.7761 4.5 17.5Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>