<script lang="ts">
let color = 'currentColor'
let size = '100%'
let className = ''

$: stylingProps = (
  className.length
  ? { class: className }
  : { style: `color: ${color}; width: ${size}; height: ${size};` }
)

export {
  className as class,
  color,
  size,
}
</script>

<svg {...stylingProps} viewBox="0 0 24 24" fill="none">
  <path
    fill-rule="evenodd"
    d="M16 18C17 18 20 17.503 20 14.5212C20 11.5394 17.5 10.5454 16.5 10.5454C16.5 9.55147 16 6.65243 12.5 6.07267C9 5.49291 7.5 8.55758 7.5 9.0545C6.5 9.05447 4 10.0485 4 13.5273C4 17.006 7 18 8 18H16ZM11.5 15C11.5 15.2761 11.7239 15.5 12 15.5C12.2761 15.5 12.5 15.2761 12.5 15V10.0001L13.7 10.9001C13.9209 11.0658 14.2343 11.021 14.4 10.8001C14.5657 10.5792 14.5209 10.2658 14.3 10.1001L12.3 8.60012C12.1222 8.46679 11.8778 8.46679 11.7 8.60012L9.7 10.1001C9.47909 10.2658 9.43431 10.5792 9.6 10.8001C9.76569 11.021 10.0791 11.0658 10.3 10.9001L11.5 10.0001L11.5 15Z"
    fill="currentColor"
  />
</svg>
