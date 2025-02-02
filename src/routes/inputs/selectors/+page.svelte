<script>
	import Button from '$lib/components/inputs/buttons/Button.svelte'
	import { Page, PageBody, MultiSelector } from '$lib/index.js'

	const optionList = [
		{ value: 'All', selected: false },
		{ value: 'This', selected: false },
		{ value: 'That', selected: false },
		{ value: 'The Other', selected: false },
		{ value: 'Blah', selected: false },
		{ value: 'What?', selected: false },
		{ value: 'Last', selected: false },
	]
</script>

<Page>
	<PageBody size="full">
		<h1>Selectors</h1>
		<div>
			<MultiSelector
				id="zip-code"
				label="Zip Code"
				searchable
				{optionList}
			/>
		</div>
		<div>
			This should get moved.
			<Button callback={() => console.log(optionList)} />
		</div>
	</PageBody>
</Page>
