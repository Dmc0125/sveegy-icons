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
      d="M4 8V16C4 16.5523 4.44772 17 5 17H15C15.5523 17 16 16.5523 16 16V8C16 7.44772 15.5523 7 15 7H5C4.44772 7 4 7.44772 4 8ZM17 10V14L20 15V9L17 10Z"
      fill="currentColor"
    />
  </svg>
</template>