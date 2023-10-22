<script>
	import { CheckList, MainContent } from '$lib/index.js'

	const list = [
		{
			description: 'test desc',
			label: 'test label',
			name: 'test-name',
			selected: false,
			value: 'test-a'
		},
		{
			description: 'test desc',
			label: 'test label',
			name: 'test-name',
			selected: false,
			value: 'test-b'
		}
	]
</script>

<MainContent>
	<h1>Checkboxes</h1>
	<CheckList {list} />
</MainContent>
