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
      d="M4 6V14C4 14.5523 4.44772 15 5 15H19C19.5523 15 20 14.5523 20 14V6C20 5.44772 19.5523 5 19 5H5C4.44772 5 4 5.44772 4 6ZM8.3618 18.2764 10 15H14L15.6382 18.2764C15.8044 18.6088 15.5627 19 15.191 19H8.80902C8.43733 19 8.19558 18.6088 8.3618 18.2764Z"
      fill="currentColor"
    />
  </svg>
</template>