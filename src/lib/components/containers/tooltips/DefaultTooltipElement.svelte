<script>
    import { TooltipElement, NeutralAlertCircleSmallIcon } from "$lib/index.js";
</script>

<TooltipElement>
    <div slot='element'>
        <NeutralAlertCircleSmallIcon />
    </div>
    <div slot='content'>
        <slot />
    </div>
</TooltipElement>
