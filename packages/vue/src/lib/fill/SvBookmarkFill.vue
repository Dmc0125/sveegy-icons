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
      d="M5.5 5V20L12 14.5L18.5 20V5C18.5 4.44772 18.0523 4 17.5 4H6.5C5.94772 4 5.5 4.44772 5.5 5Z"
      fill="currentColor"
    />
  </svg>
</template>