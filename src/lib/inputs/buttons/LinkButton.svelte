<script>
	import { ButtonContents } from '$lib/index.js'

	export let classes, disabled, firstIcon, secondIcon, styles, text, url=''
</script>

<a
	href={url}
	{disabled}
	class={`
		semibold
		${classes?.includes('btn-full') ? 'btn-full' : 'btn-fit'}
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
