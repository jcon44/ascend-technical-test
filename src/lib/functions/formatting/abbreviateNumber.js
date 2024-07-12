export default function abbreviateNumber(number) {
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
		let numberString = number.toString()
		let numberArray = numberString.split('')
		let firstNumber = numberArray[0]
		let remainingNumbers = numberArray.slice(1, numberArray.length).join('').toFixed(1)
		abvNumber = `${firstNumber},${remainingNumbers}`
	} else {
		abvNumber = number.toString()
	}
	return abvNumber
}
