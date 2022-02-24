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
      d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 4.23412 11.1619 5 13C6.48692 16.5686 10.5 19.5 12 20C13.5 19.5 17.5131 16.5686 19 13C19.7659 11.1619 20 10.2091 20 8C20 5.79086 18.2091 4 16 4C13.7909 4 12 5.79086 12 8C12 5.79086 10.2091 4 8 4Z"
      fill="currentColor"
    />
  </svg>
</template>