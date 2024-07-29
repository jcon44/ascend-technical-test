<script>
	export let tooltipId, x, y, tooltipInfo = {}
</script>

<div
	id={tooltipId}
	class="tooltip"
	style="top:{y}px;left:{x}px;"
>
	<div class="tooltip-text">
		<p class="tooltip-title">{tooltipInfo.title}</p>
		{#if tooltipInfo.valueOneLabel}
			<p class="values"><span>{tooltipInfo.valueOneLabel}:</span> {tooltipInfo.valueOne}</p>
		{/if}
		{#if tooltipInfo.valueTwoLabel}
			<p class="values"><span>{tooltipInfo.valueTwoLabel}:</span> {tooltipInfo.valueTwo}</p>
		{/if}
	</div>
</div>

<style>
	.tooltip {
		position: absolute;
		top: 0;
		left: 0;
		min-height: 70px;
		min-width: 120px;
		background-color: var(--neutral-base);
		border-radius: 12px;
		opacity: 0;
	}

	.tooltip-text {
		font-size: 11px;
		height: 100%;
		width: 100%;
		padding: var(--spacing03) var(--spacing06);
		color: white;
		text-align: center;
		line-height: 150%;
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0; */

		& .tooltip-title {
			font-size: 13px;
			margin-bottom: var(--spacing01);
		}
	}

	.values {
		font-size: 11px;
		overflow: hidden;

		& span {
			color: var(--neutral-300);
		}
	}
</style>
