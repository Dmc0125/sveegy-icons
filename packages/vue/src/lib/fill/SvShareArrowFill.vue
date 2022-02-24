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
      d="M12.7071 4.70711L16.2929 8.29289C16.9229 8.92286 16.4767 10 15.5858 10L8.41421 10C7.52331 10 7.07714 8.92286 7.70711 8.29289L11.2929 4.70711C11.6834 4.31658 12.3166 4.31658 12.7071 4.70711Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      d="M11.5 16V10H12.5V16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16ZM4 19.5C4 19.2239 4.22386 19 4.5 19H19.5C19.7761 19 20 19.2239 20 19.5C20 19.7761 19.7761 20 19.5 20H4.5C4.22386 20 4 19.7761 4 19.5Z"
      fill="currentColor"
    />
  </svg>
</template>