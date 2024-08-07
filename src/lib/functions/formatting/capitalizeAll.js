import captitalize from '$lib/index.js'

export default function captitalizeAll(phrase) {
	const wordArray = phrase.split(' ')

	for (let i = 0; i < wordArray.length; i++) {
		wordArray[i] = captitalize(wordArray[i])
	}

	const capitalizedPhrase = wordArray.join(' ')

	return capitalizedPhrase
}
