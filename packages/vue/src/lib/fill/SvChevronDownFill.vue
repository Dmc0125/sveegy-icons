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
      d="M5 4C4.44772 4 4 4.44772 4 5L4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19L20 5C20 4.44772 19.5523 4 19 4L5 4ZM8.35355 10.1464C8.15829 9.95117 7.84171 9.95117 7.64645 10.1464C7.45118 10.3417 7.45118 10.6583 7.64645 10.8535L11.6464 14.8535C11.8417 15.0488 12.1583 15.0488 12.3536 14.8535L16.3536 10.8535C16.5488 10.6583 16.5488 10.3417 16.3536 10.1464C16.1583 9.95117 15.8417 9.95117 15.6464 10.1464L12 13.7929L8.35355 10.1464Z"
      fill="currentColor"
    />
  </svg>
</template>