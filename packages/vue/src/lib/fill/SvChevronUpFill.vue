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
      d="M19 20C19.5523 20 20 19.5523 20 19L20 5C20 4.44771 19.5523 4 19 4L5 4C4.44771 4 4 4.44772 4 5L4 19C4 19.5523 4.44771 20 5 20L19 20ZM15.6464 13.8536C15.8417 14.0488 16.1583 14.0488 16.3536 13.8536C16.5488 13.6583 16.5488 13.3417 16.3536 13.1465L12.3536 9.14646C12.1583 8.9512 11.8417 8.9512 11.6464 9.14646L7.64645 13.1465C7.45118 13.3417 7.45118 13.6583 7.64645 13.8536C7.84171 14.0488 8.15829 14.0488 8.35355 13.8536L12 10.2071L15.6464 13.8536Z"
      fill="currentColor"
    />
  </svg>
</template>