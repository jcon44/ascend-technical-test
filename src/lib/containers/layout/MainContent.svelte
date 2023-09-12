<div class='main-content'>
	<slot />
</div>


<style>
	.main-content {
		display: flex;
		min-height: calc(100dvh - 81px); 
		flex-direction: column;
	}
</style>