<script>
    import { TooltipElement } from "$lib/index.js";
    export let filter = {}
    if (filter.label.length > 1) {
        filter.label = filter.label?.join(', ')
    } else if (filter.tooltip.includes('Range')) {
        filter.label = filter.label?.join(' - ')
    }
</script>

<TooltipElement>
    <div slot="element" class="filter-label">
        <svelte:component this={filter.icon} />
        <p class="body-bold-xs">{filter.label}</p>
    </div>
    <div slot="content">
        {filter.tooltip}
    </div>
</TooltipElement>

<style>
    .filter-label {
        display: flex;
        align-items: center;
        gap: var(--spacing03);
        color: var(--neutral-400);
    }
</style>