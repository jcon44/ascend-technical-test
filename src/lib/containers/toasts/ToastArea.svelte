<script>
	import { Toast, removeToast } from '$lib/index.js';

	export let toastList = undefined;
</script>

{#if toastList?.length > 0}
	<div class="toast-area">
		<div class="toast-list">
			{#each toastList as toast}
				<Toast {toast} on:timer={(e) => (toastList = removeToast(e, toastList))} />
			{/each}
		</div>
	</div>
{/if}

<style>
	.toast-area {
		display: flex;
		justify-content: center;
		position: static;
	}
	.toast-list {
		bottom: 5%;
		display: flex;
		flex-direction: column-reverse;
		gap: var(--spacing05);
		overflow: auto;
		position: fixed;
		width: var(--spacing25);
	}
</style>
