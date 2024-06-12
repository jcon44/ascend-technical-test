<script>
    import { ChartKey } from '$lib/index.js'

    export let data = [], colors = [], labelKey
</script>

<div class='key-container'>
    {#each data as d, i}
        <ChartKey color={colors[i]} text={d[labelKey]} />
    {/each}
</div>

<style>
    .key-container {
        display: flex;
        gap: var(--spacing05);
    }
</style>