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
    d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12.3535 8.14647C12.1583 7.95121 11.8417 7.95121 11.6464 8.14647L8.1464 11.6465C7.95113 11.8417 7.95113 12.1583 8.1464 12.3536C8.34166 12.5488 8.65824 12.5488 8.8535 12.3536L11.4999 9.70714L11.4999 15.5C11.4999 15.7762 11.7237 16 11.9999 16C12.276 16 12.4999 15.7762 12.4999 15.5L12.4999 9.70712L15.1464 12.3536C15.3417 12.5488 15.6583 12.5488 15.8535 12.3536C16.0488 12.1583 16.0488 11.8417 15.8535 11.6465L12.3535 8.14647Z"
    fill="currentColor"
  />
</svg>
