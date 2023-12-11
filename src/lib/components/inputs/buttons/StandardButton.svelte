<script>
	import { ButtonContents } from '$lib/index.js'

	export let bottomIcon,
		classes,
		disabled,
		leftIcon,
		rightIcon,
		styles = [],
		text,
		topIcon
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
		<ButtonContents
			{bottomIcon}
			{leftIcon}
			{rightIcon}
			{text}
			{topIcon}
		/>
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
