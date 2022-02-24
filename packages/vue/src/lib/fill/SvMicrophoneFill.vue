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
      d="M15 12V7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      d="M7 11C7.27614 11 7.5 11.2239 7.5 11.5V12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12V11.5C16.5 11.2239 16.7239 11 17 11C17.2761 11 17.5 11.2239 17.5 11.5V12C17.5 14.869 15.3033 17.225 12.5 17.4776V19.5C12.5 19.7761 12.2761 20 12 20C11.7239 20 11.5 19.7761 11.5 19.5V17.4776C8.69675 17.225 6.5 14.869 6.5 12V11.5C6.5 11.2239 6.72386 11 7 11Z"
      fill="currentColor"
    />
  </svg>
</template>