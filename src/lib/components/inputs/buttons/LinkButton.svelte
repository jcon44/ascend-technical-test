<script>
	import { ButtonContents } from '$lib/index.js'

	export let bottomIcon,
		classes,
		disabled,
		leftIcon,
		rightIcon,
		styles = [],
		text,
		topIcon,
		url = ''
</script>

<a
	href={disabled ? '#' : url}
	{disabled}
	class={`
		semibold
		${classes?.includes('btn-full') ? 'btn-full' : 'btn-fit'}
	`}
	style={styles.join(';')}
>
	<div
		class={`
			btn-content-wrapper
			${classes?.join(' ') ?? ''}
			${disabled ? 'btn-disabled' : ''}
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
</a>

<style>
	a {
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
