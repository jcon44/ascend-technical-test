<script>
	import {
		AlertCircleSmallIcon,
		CloseButton,
		SuccessCheckCircleSmallIcon
	} from '$lib/index.js';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let toast;

	const dispatch = createEventDispatcher();

	function closeToast(id) {
		dispatch('timer', { id });
	}

	onMount(() => {
		if (toast.category === 'dismiss') {
			setTimeout(() => closeToast(toast._id), 2000);
		}
	});
</script>

<div class="toast-container" out:fade>
	<div class="toast-body">
		<div class="icon-column">
			{#if toast.purpose === 'success'}
				<SuccessCheckCircleSmallIcon />
			{:else if toast.purpose === 'error'}
				<AlertCircleSmallIcon />
			{/if}
		</div>
		<div class="text-column">
			<div class="text-title headline-l-xs">
				{toast.title}
			</div>
			<div class="text-body">
				<p>{toast.body}</p>
			</div>
		</div>
		{#if toast.category === 'action'}
			<div class="close-column">
				<CloseButton
					callback={() => closeToast(toast._id)}
					classes={['purple']}
				/>
			</div>
		{/if}
	</div>
	{#if toast.action}
		<div class="toast-actions" />
	{/if}
</div>

<style>
	.toast-container {
		color: white;
		background-color: var(--neutral-800);
		border-radius: var(--spacing09);
		box-shadow: 0px var(--spacing04) var(--spacing10) var(--neutral-trans-050), 0px var(--spacing02) var(--spacing03) var(--spacing02) var(--neutral-trans-100);
		gap: var(--spacing11);
		padding: var(--spacing09);
	}
	.toast-body,
	.toast-actions {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
	.icon-column {
		width: var(--spacing13);
		display: flex;
		align-items: center;
	}
	.text-column {
		width: var(--spacing22);
	}
	.close-column {
		color: white;
	}
</style>
