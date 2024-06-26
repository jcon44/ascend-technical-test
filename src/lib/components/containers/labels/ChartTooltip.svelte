<script>
    export let tooltipId, x, y, domainLabel, domain, rangeLabel, range, series
</script>

<div id={tooltipId} class='tooltip' style="top:{y}px;left:{x}px;">
    <div class="tooltip-text">
        <p>{series}</p>
        {#if domain}
            <p class='values'><span>{domainLabel}:</span> {domain}</p>
        {/if}
        {#if range}
            <p class='values'><span>{rangeLabel}:</span> {range}</p>
        {/if}
    </div>
</div>

<style>
    .tooltip {
        position: absolute;
        top: 0;
        left: 0;
        height: 70px;
        min-width: 120px;
        background-color: var(--neutral-base);
        border-radius: 12px;
        opacity: 0;
    }

    .tooltip-text {
        font-size: 13px;
        height: 100%;
        width: 100%;
        padding: var(--spacing03) var(--spacing06);
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .values {
        font-size: 11px;
        overflow: hidden;

        & span {
            color: var(--neutral-300);
        }
    }
</style>
