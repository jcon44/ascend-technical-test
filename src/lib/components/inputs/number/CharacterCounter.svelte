<script>
	export let maxlength = 160,
		text = ''
</script>

<div class={`characters-remaining ${text.length > maxlength ? 'error' : ''}`}>
	{text.length}/{maxlength}
</div>

<style>
	.characters-remaining {
		color: var(--neutral-400);
		font-size: var(--body-small-xs-font-size);
		font-weight: 600;
		line-height: 150%;
		text-align: right;
		width: 100%;
	}
	.error {
		color: var(--error-700);
	}
</style>
