export default function abbreviateNumber(number, start = 10000) {
	let abvNumber = ''
	if (number >= 1000000000000) {
		abvNumber = `${(number * 0.000000000001).toFixed(1)}T`
	} else if (number >= 1000000000) {
		abvNumber = `${(number * 0.000000001).toFixed(1)}B`
	} else if (number >= 1000000) {
		abvNumber = `${(number * 0.000001).toFixed(1)}M`
	} else if (number >= 10000) {
		abvNumber = `${(number * 0.001).toFixed(1)}K`
	} else if (number >= 1000) {
		if (start === 1000) {
			abvNumber = `${(number * 0.001).toFixed(1)}K`
		} else {
			let numberString = number.toString()
			let numberArray = numberString.split('')
			let firstNumber = numberArray[0]
			let remainingNumbers = numberString.slice(1, numberArray.length)
			abvNumber = `${firstNumber},${remainingNumbers}`
		}
	} else {
		abvNumber = number.toString()
	}
	return abvNumber
}
