<script>
    export let color, text
</script>

<div class="chart-key">
    <div class="color-block" style="background-color:{color};"></div>
    <p class="key-text">{text}</p>
</div>

<style>
    .chart-key {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--spacing04);
        width: fit-content;
    }

    .color-block {
        width: var(--spacing03);
        height: var(--spacing03);
        border-radius: 50%;
    }

    .key-text {
        font-size: 14px;
    }
</style>