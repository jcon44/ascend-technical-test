<script>
	import { ButtonContents } from '$lib/index.js'

	export let classes, disabled, firstIcon, secondIcon, styles, text;
</script>

<button
	disabled={disabled}
	class={`
		semibold
		${classes.includes('btn-full') ? 'btn-full' : 'btn-fit'}
	`}
	style={styles?.length ? [...styles] : ''}
>
	<div
		class={`
			btn-content-wrapper
			${classes?.join(' ') ?? ''}
		`}
		style={styles?.length ? [...styles] : ''}
	>
		<ButtonContents {text} {firstIcon} {secondIcon} />
	</div>
</button>

<style>
	button {
		align-items: center;
		background-color: transparent;
		border-radius: var(--btn-border-radius);
		border: none;
		color: inherit;
		cursor: pointer;
		display: flex;
		text-decoration: none;
	}
</style>