<script>
    import { ChartKey } from '$lib/index.js'

    export let data = [], colors = [], xKey
</script>

<div class='key-container'>
    {#each data as d, i}
        <ChartKey color={colors[i]} text={d[xKey]} />
    {/each}
</div>

<style>
    .key-container {
        display: flex;
        gap: var(--spacing05);
    }
</style>