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
      d="M10 4H5C4.44772 4 4 4.44772 4 5V10C4 10.5523 4.44772 11 5 11H10C10.5523 11 11 10.5523 11 10V5C11 4.44772 10.5523 4 10 4ZM19 4H14C13.4477 4 13 4.44772 13 5V10C13 10.5523 13.4477 11 14 11H19C19.5523 11 20 10.5523 20 10V5C20 4.44772 19.5523 4 19 4ZM19 13H14C13.4477 13 13 13.4477 13 14V19C13 19.5523 13.4477 20 14 20H19C19.5523 20 20 19.5523 20 19V14C20 13.4477 19.5523 13 19 13ZM10 13H5C4.44772 13 4 13.4477 4 14V19C4 19.5523 4.44772 20 5 20H10C10.5523 20 11 19.5523 11 19V14C11 13.4477 10.5523 13 10 13Z"
      fill="currentColor"
    />
  </svg>
</template>