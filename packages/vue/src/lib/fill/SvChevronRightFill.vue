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
      d="M4 19C4 19.5523 4.44772 20 5 20L19 20C19.5523 20 20 19.5523 20 19L20 5C20 4.44771 19.5523 4 19 4L5 4C4.44772 4 4 4.44771 4 5L4 19ZM10.1464 15.6464C9.95117 15.8417 9.95117 16.1583 10.1464 16.3536C10.3417 16.5488 10.6583 16.5488 10.8535 16.3536L14.8535 12.3536C15.0488 12.1583 15.0488 11.8417 14.8535 11.6464L10.8535 7.64645C10.6583 7.45118 10.3417 7.45118 10.1464 7.64645C9.95117 7.84171 9.95117 8.15829 10.1464 8.35355L13.7929 12L10.1464 15.6464Z"
      fill="currentColor"
    />
  </svg>
</template>