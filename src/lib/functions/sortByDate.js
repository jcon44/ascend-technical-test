export default function sortByDate(dateList, sortOrder) {

	if (sortOrder === 'newest') {

		dateList.sort((a, b) => (new Date(b) - new Date(a)))

	} else {

		dateList.sort((a, b) => (new Date(a) - new Date(b)))

	}

	return dateList

}