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
    d="M5 6C4.44772 6 4 6.44772 4 7V7.6169L11.7428 12.2626C11.9011 12.3576 12.0989 12.3576 12.2572 12.2626L20 7.6169V7C20 6.44772 19.5523 6 19 6H5ZM20 8.7831L12.7717 13.12C12.2967 13.4051 11.7033 13.4051 11.2283 13.12L4 8.7831V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V8.7831Z"
    fill="currentColor"
  />
</svg>
