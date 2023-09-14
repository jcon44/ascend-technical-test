<script>
	import { DialogBody, DialogFooter, DialogHeader } from '$lib/index.js'

	export let store

	let dialog

	$: if (store.dialog.showDialog === false) dialog.close()
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div class='dialog-container' on:click={() => store.dialog.showDialog = false}>
	<dialog bind:this={dialog} on:click|stopPropagation>
		<DialogHeader>
			<slot name='dialog-header-slot' />
		</DialogHeader>
		<DialogBody>
			<slot name='dialog-body-slot' />
		</DialogBody>
		<DialogFooter>
			<slot name='dialog-footer-slot' />
		</DialogFooter>
	</dialog>
</div>

<style>
	.dialog-container {
		align-items: center;
		backdrop-filter: blur(10px);
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		height: 100%;
		justify-content: center;
		position: fixed;
		width: 100%;
		z-index: 100;
	}
	dialog {
		border-radius: var(--border-radius-xl);
		border: none;
		box-shadow: 0px var(--spacing04) var(--spacing10) var(--neutral-trans-050),
			0px var(--spacing02) var(--spacing03) var(--spacing02) var(--neutral-trans-100);
		display: block;
		margin: auto;
		width: var(--spacing30);
	}
	dialog:modal {
		background-color: var(--background-base);		
		flex-direction: column;
		max-height: 90vh;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
		backdrop-filter: blur(10px);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
