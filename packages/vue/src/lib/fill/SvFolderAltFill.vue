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
      d="M4 17.5V6.5C4 5.94772 4.44772 5.5 5 5.5H10C10.3148 5.5 10.6111 5.64819 10.8 5.9L11.4827 6.81022L10.2929 8H6.5C6.22386 8 6 8.22386 6 8.5C6 8.77614 6.22386 9 6.5 9H10.5H10.7071L10.8536 8.85355L12.2412 7.46593C12.3247 7.48832 12.4116 7.5 12.5 7.5H19C19.5523 7.5 20 7.94772 20 8.5V17.5C20 18.0523 19.5523 18.5 19 18.5H5C4.44772 18.5 4 18.0523 4 17.5Z"
      fill="currentColor"
    />
  </svg>
</template>