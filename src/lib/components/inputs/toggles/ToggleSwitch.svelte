<script>
    export let leftIcon, rightIcon, checked = false
</script>

<label class="toggle-switch border-radius-s">
    <div class="icon-container">
        <div class="switch-icon">
            <svelte:component this={leftIcon} />
        </div>
        <div class="switch-icon">
            <svelte:component this={rightIcon} />
        </div>
    </div>
    <input type='checkbox' bind:checked />
    <div class="slider-container border-radius-s">
        <div class='left border-radius-s'>

        </div>
        <div class='right border-radius-s'>

        </div>
    </div>
</label>

<style>
    .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .toggle-switch {
        position: relative;
        width: 96px;
        height: 48px;
        border: 1px solid var(--neutral-100);
        background-color: var(--neutral-100);
    }
    .slider-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .left {
        position: absolute;
        top: 0;
        left: 0;
        width: 46px;
        height: 46px;
        opacity: 1;
        background-color: white;
        transition: ease-out 300ms;
    }
    .right {
        position: absolute;
        top: 0;
        right: 0;
        width: 46px;
        height: 46px;
        opacity: 0;
        background-color: white;
        transition: ease-out 300ms;
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
    .switch-icon {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input:checked + .slider-container .left {
        opacity: 0;
        transition: ease-out 300ms;
    }
    input:checked + .slider-container .right {
        opacity: 1;
        transition: ease-out 300ms;
    }
</style>