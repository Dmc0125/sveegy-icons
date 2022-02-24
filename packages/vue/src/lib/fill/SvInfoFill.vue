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
      d="M9.5 11V19C9.5 19.5523 9.94772 20 10.5 20H13.5C14.0523 20 14.5 19.5523 14.5 19V11C14.5 10.4477 14.0523 10 13.5 10H10.5C9.94772 10 9.5 10.4477 9.5 11ZM12 9C13.3807 9 14.5 7.88071 14.5 6.5 14.5 5.11929 13.3807 4 12 4 10.6193 4 9.5 5.11929 9.5 6.5 9.5 7.88071 10.6193 9 12 9Z"
      fill="currentColor"
    />
  </svg>
</template>