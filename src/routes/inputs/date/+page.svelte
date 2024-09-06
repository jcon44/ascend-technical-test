<script>
import { Page, PageBody, DateRange, MonthPicker, MonthRange } from '$lib/index.js'
</script>

<Page>
	<PageBody>
		<DateRange styles={[`width: 25%`]} />
		<MonthPicker label="Month Picker" id='month-picker'/>
		<MonthRange />
	</PageBody>
</Page>
