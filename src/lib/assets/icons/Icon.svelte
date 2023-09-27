<script>
	export let size
</script>

<svg fill="none" height={size} viewBox={`0 0 ${size} ${size}`} width={size}>
	<slot />
</svg>
