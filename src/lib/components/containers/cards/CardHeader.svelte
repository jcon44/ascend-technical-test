<script>
    import { DefaultTooltipElement, Button, ChevronSingleRightSmallIcon } from "$lib/index.js";
    export let icon = null, 
        title = '', 
        titleTooltip = null,
        titleButton = false, 
        titleButtonText = 'See More'
</script>

{#if icon || title || titleTooltip}
    <div class="icon-title-wrapper">
        {#if icon}
            <div class="card-icon">
                <svelte:component this={icon} />
            </div>
        {/if}
        {#if title}
            <div class="headline-l-m card-title">
                {title}
            </div>
        {/if}
        {#if titleTooltip}
            <DefaultTooltipElement>
                {titleTooltip?.content}
            </DefaultTooltipElement>
        {/if}
        {#if titleButton}
            <div class='additional-information-button'>
                <Button 
                    classes={['btn-link', 'btn-m']}
                    rightIcon={ChevronSingleRightSmallIcon}
                    text={titleButtonText}
                />
            </div>
        {/if}
    </div>
{/if}

<style>
    .icon-title-wrapper {
		display: flex;
		gap: var(--spacing06);
		align-items: center;
	}
    .card-title{
        font-size: var(--heading-s-m-font-size);
    }
    .additional-information-button {
		margin-left: auto;
	}
    .additional-information-button {
		margin-left: auto;
	}

    @media screen and (min-width: 768px) {
		.card-title {
			font-size: var(--heading-s-l-font-size);
		}
	}
</style>