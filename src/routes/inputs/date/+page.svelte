<script>
import { Page, PageBody, DateRange, MonthPicker, MonthRange } from '$lib/index.js'
</script>

<Page>
	<PageBody size="full">
		<DateRange styles={[`width: 100%`]} fill />
		<MonthPicker label="Month Picker" id='month-picker'/>
		<MonthRange />
	</PageBody>
</Page>
