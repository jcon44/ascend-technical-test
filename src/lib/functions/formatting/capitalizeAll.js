import { capitalize } from '$lib/index.js'

export default function capitalizeAll(phrase) {
	const wordArray = phrase.split(' ')

	for (let i = 0; i < wordArray.length; i++) {
		wordArray[i] = capitalize(wordArray[i])
	}

	const capitalizedPhrase = wordArray.join(' ')

	return capitalizedPhrase
}
