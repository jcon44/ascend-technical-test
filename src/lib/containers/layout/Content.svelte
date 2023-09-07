<div class='content'>
	<slot />
</div>


<style>
	.content {
		display: flex;
		min-height: calc(100dvh - 81px); 
		flex-direction: column;
	}
</style>