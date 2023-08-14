export default function captitalize(word) {
	const letterArray = word.split('')

	const firstLetter = letterArray[0]

	const capitalFirstLetter = firstLetter.toUpperCase()

	letterArray[0] = capitalFirstLetter

	const rejoinedWord = letterArray.join('')

	return rejoinedWord
}
