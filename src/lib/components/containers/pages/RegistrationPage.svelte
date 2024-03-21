<script>
	import { AscendLoginBackground, RegistrationCard } from '$lib/index.js'
</script>

<div
	class="registration-page"
	style={`background-image: url(${AscendLoginBackground})`}
>
	<RegistrationCard>
		<slot />
	</RegistrationCard>
</div>

<style>
	.registration-page {
		align-items: center;
		background-position: center;
		background-size: cover;
		bottom: 0;
		display: flex;
		justify-content: center;
		left: 0;
		position: fixed;
		right: 0;
		top: 0;
	}
	@media screen and (min-width: 768px) {
		.registration-page {
			padding: unset;
		}
	}
</style>
