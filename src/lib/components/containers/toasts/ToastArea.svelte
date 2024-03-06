<script>
	import { Toast } from '$lib/index.js'
	import { fade } from 'svelte/transition'

	export let toastList = undefined, delay = 3000

	function removeToast(event) {
		toastList = toastList.filter((toast) => toast.id !== event.detail.id)
	}
</script>

{#if toastList?.length > 0}
	<div class="toast-area" transition:fade>
		<div class="toast-list">
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
		bottom: 5%;
		display: flex;
		flex-direction: column-reverse;
		gap: var(--spacing05);
		border-radius: var(--spacing09);
		overflow: auto;
		position: fixed;
		transform: translateX(-33%);
		width: var(--spacing25);
	}
</style>
