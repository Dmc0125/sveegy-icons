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
      d="M4 5V17.5C4 18.0523 4.44932 18.4998 5.00161 18.5003C10.0622 18.5052 10.5881 18.5881 12 20C13.4042 18.5958 14.3702 18.5061 18.9995 18.5004C19.5518 18.4997 20 18.0523 20 17.5V5C20 4.44772 19.5507 3.99977 18.9984 4.0003C13.9378 4.00517 13.4119 4.0881 12 5.5C10.5881 4.0881 10.0622 4.00517 5.00161 4.0003C4.44932 3.99977 4 4.44771 4 5Z"
      fill="currentColor"
    />
  </svg>
</template>