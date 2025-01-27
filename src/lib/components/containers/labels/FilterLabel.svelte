<script>
    import { TooltipElement } from "$lib/index.js";
    export let filter = {}

    let text = filter.label?.join(', ')
</script>

<TooltipElement>
    <div slot="element" class="filter-label">
        <svelte:component this={filter.icon} />
        <p class="body-bold-xs text">{text}</p>
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
    .text{
        max-width: 300px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>