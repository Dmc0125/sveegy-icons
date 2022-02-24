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
      d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12ZM13.8536 8.35355C14.0488 8.15829 14.0488 7.84171 13.8536 7.64645C13.6583 7.45118 13.3417 7.45118 13.1465 7.64645L9.14646 11.6464C8.9512 11.8417 8.9512 12.1583 9.14646 12.3536L13.1465 16.3536C13.3417 16.5488 13.6583 16.5488 13.8536 16.3536C14.0488 16.1583 14.0488 15.8417 13.8536 15.6464L10.2071 12L13.8536 8.35355Z"
      fill="currentColor"
    />
  </svg>
</template>