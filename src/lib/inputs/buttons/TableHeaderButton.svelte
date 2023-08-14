<script>
	import {
		ArrowDownExtraSmallIcon,
		ArrowUpExtraSmallIcon,
		Button
	} from '$lib/index.js';

	export let text,
		order,
		alignment = 'center',
		callback,
		index
</script>

<div
	class="table-header-button"
	style={index === 0 ? 'margin-left: 40px;' : ''}
>
	<Button
		{callback}
		classes={[`column-${index}`, 'semibold', 'table-header']}
		padding="0px"
		{text}
		textAlign={alignment}
		width={'fit-content'}
	/>
	<div class="sort-indicator">
		{#if order === 'descending'}
			<ArrowDownExtraSmallIcon />
		{:else if order === 'ascending'}
			<ArrowUpExtraSmallIcon />
		{/if}
	</div>
</div>

<style>
	.table-header-button {
		align-items: center;
		display: flex;
		justify-content: center;
	}
	.sort-indicator {
		margin-left: var(--spacing05);
	}
</style>
