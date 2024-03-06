<script>
	import { Page, ToastArea } from '$lib/index.js'

	const toastList = [
		{
			body: 'Yay!',
			category: 'dismiss',
			id: 0,
			purpose: 'success',
			title: 'Success!',
		},
		{
			body: 'Oh no, what now?',
			category: 'action',
			id: 1,
			purpose: 'error',
			title: 'Error!',
		}
	]
</script>

<Page>
	<h1>Toasts</h1>
	<pre>
		{`
			const toastList = [
				{
					body: 'Yay!',
					category: 'dismiss',
					id: 0,
					purpose: 'success',
					title: 'Success!',
				},
				{
					body: 'Oh no, what now?',
					category: 'action',
					id: 1,
					purpose: 'error',
					title: 'Error!',
				}
			]
		`}
	</pre>
	<ToastArea {toastList} />
</Page>
