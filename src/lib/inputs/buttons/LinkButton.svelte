<script>
	import { ButtonContents } from '$lib/index.js'

	export let classes,
		disabled,
		firstIcon,
		secondIcon,
		styles = [],
		text,
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
			{text}
			{firstIcon}
			{secondIcon}
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
