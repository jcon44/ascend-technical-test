export default function sortArray(unsortedArray, columnKey, columnType, sortOrder) {
	// sort the items by the column in the given order
	return unsortedArray.sort((a, b) => {
		let aItem = a[columnKey]
		let bItem = b[columnKey]

		// sorting text-based values
		if (columnType === 'string' || columnType === 'array') {
			// convert items for 'array' columnType
			if (columnType === 'array') {
				aItem = a[columnKey].sort().join(' ')
				bItem = b[columnKey].sort().join(' ')
			}

			// return based on sort order
			if (sortOrder === 'ascending') {
				if (aItem > bItem) return -1
				else if (aItem < bItem) return 1
			} else if (sortOrder === 'descending') {
				if (aItem < bItem) return -1
				else if (aItem > bItem) return 1
			}
			return 0

			// sorting number-based values
		} else {
			// convert items for 'number' columnType
			if (columnType === 'number') {
				aItem = parseInt(a[columnKey])
				bItem = parseInt(b[columnKey])
			}

			// convert items for 'date' columnType
			else if (columnType === 'date') {
				aItem = new Date(a[columnKey])
				bItem = new Date(b[columnKey])
			}

			// return based on sort order
			if (sortOrder === 'ascending') return aItem - bItem
			else if (sortOrder === 'descending') return bItem - aItem
		}
	})
}
