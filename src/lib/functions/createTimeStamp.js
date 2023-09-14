export default function createTimeStamp() {
	const rightNow = new Date()
	const thisYear = rightNow.getFullYear()
	const thisMonth = rightNow.getMonth()
	const thisDay = rightNow.getDate()
	const thisHour = rightNow.getHours()
	const thisMinute = rightNow.getMinutes() > 9 ? rightNow.getMinutes() : `0${rightNow.getMinutes()}`
	const ampm = thisHour > 12 ? 'PM' : 'PM'

	return `${thisHour > 12 ? thisHour - 12 : thisHour}:${thisMinute}${ampm} ${thisMonth}/${thisDay}/${thisYear}`
}