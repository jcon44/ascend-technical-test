import { capitalize } from '$lib/index.js'

export default function capitalizeAll(phrase) {
	console.log('phrase = ', phrase)
	const wordArray = phrase.split(' ')

	console.log('wordArray = ', wordArray)

	for (let i = 0; i < wordArray.length; i++) {
		wordArray[i] = capitalize(wordArray[i])
		console.log(`wordArray[${i}] = `, wordArray[i])
	}

	const capitalizedPhrase = wordArray.join(' ')
	console.log('capitalizedPhrase = ', capitalizedPhrase)

	return capitalizedPhrase
}
