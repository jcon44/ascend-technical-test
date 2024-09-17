<script>
    import { ExportCSVButton } from "$lib/index.js"
    export let callback
</script>

<ExportCSVButton text="Export Data" {callback} />