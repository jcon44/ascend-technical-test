<script>
	import { CardGridIcon } from "$lib/index.js"

    export let icon = CardGridIcon,
        checked = false
</script>

<label class="toggle-button border-radius-s">
    <input type='checkbox' bind:checked />
    <div class="icon-container border-radius-s">
        <div class="button-icon">
            <svelte:component this={icon} />
        </div>
    </div>
</label>

<style>
    .toggle-button input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .toggle-button {
        cursor: pointer;
        position: relative;
        width: 48px;
        height: 48px;
        background-color: white;
    }
    .icon-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
    }
    .button-icon {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input:checked + .icon-container {
        border: 1px solid var(--neutral-100);
    }
</style>