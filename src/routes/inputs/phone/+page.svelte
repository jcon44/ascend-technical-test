<script>
	import { Page, PhoneNumberInput } from '$lib/index.js'

	let phoneNumber = ''
</script>


<Page>
	<PhoneNumberInput
		id="phone-number"
		label="Phone Number"
		placeholder="Enter your phone number"
		required={true}
		{phoneNumber}
	/>
</Page>