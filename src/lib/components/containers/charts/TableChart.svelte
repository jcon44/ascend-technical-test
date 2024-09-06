<script>
    import { Table } from "$lib/index.js";

    export let columns = [],
        list = []

    list = list.map((el, i) => {
        el.display = false
        if (i < 5) el.display = true
        return el
    })
</script>

<Table 
    chart
    bind:list
    {columns}
/>