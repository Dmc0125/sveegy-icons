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
      d="M9.10054 12.7701L12 12L10.7164 7.16756M19.2487 10.0746C20.312 14.0779 17.9287 18.1853 13.9254 19.2486C9.92205 20.312 5.8147 17.9287 4.75135 13.9254C3.688 9.92204 6.07131 5.81469 10.0746 4.75134C14.078 3.68799 18.1853 6.07131 19.2487 10.0746Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>