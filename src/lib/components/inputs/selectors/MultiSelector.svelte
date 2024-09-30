<script>
    import { Label, CheckboxSelectOption, ChevronSingleUpSmallIcon, ChevronSingleDownSmallIcon, InputError } from "$lib/index.js"
	import { beforeUpdate } from "svelte"

    export let id = '',
        label = '',
        styles = [],
        callback = null,
        validValue = true,
        validationCallback = null,
        validationText = '',
        optionList = []

    let open = false, allUnselected = false

    function openToggle() {
        open = !open
    }

    beforeUpdate(() => {
        for (let option of optionList) {
            if (option.value === 'All' && option.selected === true) {
                optionList = optionList.map((option) => {
                    option.selected = true
                    return option
                })
                allUnselected = false
            }
            if (option.value === 'All') {
                if (option.selected === false && allUnselected === false) {
                    optionList = optionList.map((option) => {
                        option.selected = false
                        return option
                    })
                    allUnselected = true
                }
            }
        }  
    })
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="multi-selector">
    <div 
        {id} 
        class="multi-selector-control { open ? 'open-selector-control' : ''}" 
        style={styles.join(';')} 
        aria="select"
    >
        <div 
            class="label-wrapper" 
            on:click={openToggle}
        >
            <Label 
                {id}
                {label}
            />
            {#if open} 
                <ChevronSingleUpSmallIcon />
            {:else}
                <ChevronSingleDownSmallIcon />
            {/if}
        </div>
        {#if open}
            <div class="list-content">
                <div class="options-list">
                    {#each optionList as optionItem}
                        <CheckboxSelectOption
                            id={optionItem.value}
                            bind:checked={optionItem.selected}
                            value={optionItem.value}
                        />
                    {/each}
                </div>
            </div>
        {/if}
    </div>
    {#if validValue === false}
        <InputError text={validationText} />
    {/if}
</div>

<style>
    .multi-selector {
        position: relative;
    }
    .multi-selector-control {
        min-width: 260px;
		display: flex;
		flex-direction: column;
		width: 100%;
		background: none;
		border-radius: var(--spacing05);
		border: var(--spacing00) solid var(--neutral-100);
        overflow: hidden;
	}
    .open-selector-control {
        border-radius: var(--spacing05) var(--spacing05) 0 0;
    }
    .label-wrapper {
        display: flex;
        justify-content: space-between;
        padding: var(--spacing05) var(--spacing05) var(--spacing05) var(--spacing09);
    }
    .label-wrapper:hover {
        background: var(--neutral-100);
    }
    .list-content {
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: white;
        border-radius: 0 0 var(--spacing05) var(--spacing05);
        border-right: var(--spacing00) solid var(--neutral-100);
        border-bottom: var(--spacing00) solid var(--neutral-100);
        border-left: var(--spacing00) solid var(--neutral-100);
        z-index: 1;
    }
    .options-list {
        padding: var(--spacing06);
        max-height: 220px;
        overflow-y: scroll;
    }
</style>