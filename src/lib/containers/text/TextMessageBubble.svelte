<script>
	export let height = '', width = '', padding = ''
</script>

<div class='text-bubble'
	style={`
		${(height ? `height: ${height};` : '')}
		${(width ? `width: ${width};` : '')}
	`}
>
	<div class='text-content' style={`${(padding ? `padding: ${padding};` : '')}`}>
		<slot />
	</div>
	<div class='text-arrow'></div>
</div>

<style>
	.text-content {
		background-color: var(--neutral-100);
		border-radius: var(--spacing06) var(--spacing06) var(--spacing06) 0px;
		overflow: hidden;
	}
	.text-arrow {
		background-color: var(--neutral-100);
		border-left: var(--spacing08) solid transparent;
		border-bottom: var(--spacing06) solid white;
	}
</style>