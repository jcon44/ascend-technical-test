<script>
	import { Toast, removeToast } from '$lib/index.js'

	export let toastList = undefined
</script>

{#if toastList?.length > 0}
	<div class="toast-area">
		<div class="toast-list">
			{#each toastList as toast}
				<Toast
					{toast}
					on:timer={(e) => (toastList = removeToast(e, toastList))}
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
