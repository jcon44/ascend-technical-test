export default function sortByDate(dateList, sortOrder) {
	if (sortOrder === 'ascending') {
		dateList.sort((a, b) => new Date(b) - new Date(a))
	} else if (sortOrder === 'descending') {
		dateList.sort((a, b) => new Date(a) - new Date(b))
	}

	return dateList
}
