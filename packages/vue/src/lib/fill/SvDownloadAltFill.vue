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
      d="M11.2929 15.7929L7.70711 12.2071C7.07714 11.5771 7.52331 10.5 8.41421 10.5H15.5858C16.4767 10.5 16.9229 11.5771 16.2929 12.2071L12.7071 15.7929C12.3166 16.1834 11.6834 16.1834 11.2929 15.7929Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      d="M12.5 4.5C12.5 4.22386 12.2761 4 12 4C11.7239 4 11.5 4.22386 11.5 4.5H12.5ZM11.5 10.5V11H12.5V10.5H11.5ZM5 16.5C5 16.2239 4.77614 16 4.5 16C4.22386 16 4 16.2239 4 16.5H5ZM20 16.5C20 16.2239 19.7761 16 19.5 16C19.2239 16 19 16.2239 19 16.5H20ZM5.5 20H18.5V19H5.5V20ZM11.5 4.5V10.5H12.5V4.5H11.5ZM5 18.5V16.5H4V18.5H5ZM20 18.5V16.5H19V18.5H20ZM18.5 20C19.3284 20 20 19.3284 20 18.5H19C19 18.7761 18.7761 19 18.5 19V20ZM5.5 19C5.22386 19 5 18.7761 5 18.5H4C4 19.3284 4.67157 20 5.5 20V19Z"
      fill="currentColor"
    />
  </svg>
</template>