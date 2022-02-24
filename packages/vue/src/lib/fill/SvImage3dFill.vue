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
      d="M4 19V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19ZM19 19H5V14.3866C5 14.1378 5.09272 13.898 5.26006 13.7139L6.95204 11.8528C8.57049 10.0725 11.383 10.1135 12.9488 11.9403L15.3077 14.6923L15.5858 14.4142C16.3668 13.6332 17.6332 13.6332 18.4142 14.4142L19 15V19ZM16 9.5C16.8284 9.5 17.5 8.82843 17.5 8C17.5 7.17157 16.8284 6.5 16 6.5C15.1716 6.5 14.5 7.17157 14.5 8C14.5 8.82843 15.1716 9.5 16 9.5Z"
      fill="currentColor"
    />
  </svg>
</template>