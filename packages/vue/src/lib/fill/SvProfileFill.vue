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
      d="M12 11.5C7.5 11.5 4.5 16.5 4 20H20C19.5 16.5 16.5 11.5 12 11.5Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
      fill="currentColor"
    />
  </svg>
</template>