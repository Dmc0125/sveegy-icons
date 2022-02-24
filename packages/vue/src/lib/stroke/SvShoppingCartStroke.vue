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
      d="M7.0625 9L6.50054 7.20173C6.37008 6.78425 5.98344 6.5 5.54606 6.5H5.5M7.0625 9H10.7812M7.0625 9L7.92188 11.75M10.7812 14.5H8.78125L7.92188 11.75M10.7812 14.5V9M10.7812 14.5H14.7812M10.7812 9H14.7812M14.7812 14.5H16.7812L17.6406 11.75M14.7812 14.5V9M14.7812 9H18.5L17.6406 11.75M7.92188 11.75H17.6406M14.7812 16.75V16.75C14.7812 17.1642 15.117 17.5 15.5312 17.5V17.5C15.9455 17.5 16.2812 17.1642 16.2812 16.75V16.75C16.2812 16.3358 15.9455 16 15.5312 16V16C15.117 16 14.7812 16.3358 14.7812 16.75ZM10.7812 16.75V16.75C10.7812 17.1642 10.4455 17.5 10.0312 17.5V17.5C9.61704 17.5 9.28125 17.1642 9.28125 16.75V16.75C9.28125 16.3358 9.61704 16 10.0312 16V16C10.4455 16 10.7812 16.3358 10.7812 16.75Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>