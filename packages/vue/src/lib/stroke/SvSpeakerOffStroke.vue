<script lang="ts" setup>
const props = defineProps<{
  size?: string
  color?: string
  strokeWidth?: string
}>()
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    :style="`width: ${props.size}; height: ${props.size}; color: ${props.color}`"
  >
    <path
      d="M14.5 8.5C14.5 8.5 15.5 10 15.5 12C15.5 14 14.5 15.5 14.5 15.5M17.5 6.5C17.5 6.5 19.5 8.5 19.5 12C19.5 15.5 17.5 17.5 17.5 17.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
    <path
      d="M6.5 13L8.5 11M4 10V14C4 14.5523 4.44772 15 5 15H7.64922C7.87629 15 8.0966 15.0773 8.27391 15.2191L10.2261 16.7809C10.4034 16.9227 10.6237 17 10.8508 17H11C11.5523 17 12 16.5523 12 16V8C12 7.44772 11.5523 7 11 7H10.8508C10.6237 7 10.4034 7.07728 10.2261 7.21913L8.27391 8.78087C8.0966 8.92272 7.87629 9 7.64922 9H5C4.44772 9 4 9.44772 4 10ZM6.5 11L8.5 13L6.5 11Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>