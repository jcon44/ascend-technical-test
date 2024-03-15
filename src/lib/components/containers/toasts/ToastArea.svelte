<script>
	import { Toast } from '$lib/index.js'
	import { fade } from 'svelte/transition'

	export let toastList = undefined, delay = 3000

	function removeToast(event) {
		toastList = toastList.filter((toast) => toast.id !== event.detail.id)
	}
</script>

{#if toastList?.length > 0}
	<div class="toast-area">
		<div class="toast-list" transition:fade>
			{#each toastList as toast}
				<Toast
					{delay}
					{toast}
					on:timer={(event) => removeToast(event)}
				/>
			{/each}
		</div>
	</div>
{/if}

<style>
	.toast-area {
		display: flex;
		justify-content: center;
		position: absolute;
		width: 100%;
	}
	.toast-list {
		align-items: center;
		border-radius: var(--spacing09);
		bottom: 5%;
		display: flex;
		flex-direction: column-reverse;
		gap: var(--spacing05);
		overflow: auto;
		padding: var(--spacing09) 0;
		position: fixed;
		transform: translateX(-33%);
		width: var(--spacing26);
	}
</style>
