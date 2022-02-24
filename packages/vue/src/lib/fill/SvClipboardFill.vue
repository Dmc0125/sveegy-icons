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
      d="M6 6V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V6C18 5.44772 17.5523 5 17 5H15C15 4.44772 14.5523 4 14 4H10C9.44772 4 9 4.44772 9 5H7C6.44772 5 6 5.44772 6 6ZM10 5.5C10 5.22386 10.2239 5 10.5 5H13.5C13.7761 5 14 5.22386 14 5.5C14 5.77614 13.7761 6 13.5 6H10.5C10.2239 6 10 5.77614 10 5.5ZM9 10C8.72386 10 8.5 10.2239 8.5 10.5C8.5 10.7761 8.72386 11 9 11H15C15.2761 11 15.5 10.7761 15.5 10.5C15.5 10.2239 15.2761 10 15 10H9ZM9 13C8.72386 13 8.5 13.2239 8.5 13.5C8.5 13.7761 8.72386 14 9 14H15C15.2761 14 15.5 13.7761 15.5 13.5C15.5 13.2239 15.2761 13 15 13H9Z"
      fill="currentColor"
    />
  </svg>
</template>