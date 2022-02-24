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
      d="M4.5 6.5C8 6.5 10 5.5 12 4C14 5.5 16 6.5 19.5 6.5C19.5 15.5 14 19 12 20C10 19 4.5 15.5 4.5 6.5ZM15.8536 10.3536C16.0488 10.1583 16.0488 9.84171 15.8536 9.64645C15.6583 9.45118 15.3417 9.45118 15.1464 9.64645L11 13.7929L8.85355 11.6464C8.65829 11.4512 8.34171 11.4512 8.14645 11.6464C7.95118 11.8417 7.95118 12.1583 8.14645 12.3536L10.6464 14.8536C10.8417 15.0488 11.1583 15.0488 11.3536 14.8536L15.8536 10.3536Z"
      fill="currentColor"
    />
  </svg>
</template>