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
      d="M4.5 14.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H18.5C19.0523 4.5 19.5 4.94771 19.5 5.5V14.5C19.5 15.0523 19.0523 15.5 18.5 15.5H12.3252C12.1138 15.5 11.9079 15.567 11.737 15.6913L6.5 19.5L8 15.5H5.5C4.94772 15.5 4.5 15.0523 4.5 14.5Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
    <path
      d="M12 9.32746C12.2761 9.32619 12.501 9.54901 12.5023 9.82515 12.5036 10.1013 12.2807 10.3262 12.0046 10.3274 11.7285 10.3287 11.5036 10.1059 11.5023 9.82975 11.501 9.55361 11.7239 9.32873 12 9.32746ZM15.5 9.32746C15.7761 9.32619 16.001 9.54901 16.0023 9.82515 16.0036 10.1013 15.7807 10.3262 15.5046 10.3274 15.2285 10.3287 15.0036 10.1059 15.0023 9.82975 15.001 9.55361 15.2239 9.32873 15.5 9.32746ZM8.49999 9.32746C8.77613 9.32619 9.00102 9.54901 9.00229 9.82515 9.00356 10.1013 8.78074 10.3262 8.5046 10.3274 8.22846 10.3287 8.00357 10.1059 8.0023 9.82975 8.00103 9.55361 8.22386 9.32873 8.49999 9.32746Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="props.strokeWidth"
    />
  </svg>
</template>