<script>
	import { Toast } from '$lib/index.js'

	export let toastList = undefined, delay = 3000

	function removeToast(event) {
		toastList = toastList.filter((toast) => toast.id !== event.detail.id)
	}

</script>

{#if toastList?.length > 0}
	<div class="toast-area">
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
		width: 100%;
		display: flex;
		justify-content: center;
		position: absolute;
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
