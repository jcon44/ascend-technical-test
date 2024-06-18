<script>
    import { ChartKey } from '$lib/index.js'

    export let data = [], colors = [], labelKey, column = false
</script>

<div class='key-container { column ? 'column': '' }'>
    {#each data as d, i}
        <ChartKey color={colors[i]} text={d[labelKey]} />
    {/each}
</div>

<style>
    .key-container {
        display: flex;
        flex-direction: row;
        gap: var(--spacing05);
    }

    .column {
        flex-direction: column;
    }
</style>