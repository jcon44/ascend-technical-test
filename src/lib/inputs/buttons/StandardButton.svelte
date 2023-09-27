<script>
	import { ButtonContents } from '$lib/index.js'

	export let classes,
		disabled,
		firstIcon,
		secondIcon,
		styles = [],
		text
</script>

<button
	{disabled}
	class={`
		semibold
		${classes.includes('btn-full') ? 'btn-full' : 'btn-fit'}
		${disabled ? 'btn-disabled' : ''}
	`}
	style={styles.join(';')}
>
	<div
		class={`
			btn-content-wrapper
			${classes?.join(' ') ?? ''}
		`}
		style={styles.join(';')}
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
		cursor: pointer;
		display: flex;
		text-decoration: none;
	}
</style>
