export default function formatTimeStamp(timestamp) {
	const thisYear = timestamp.getFullYear()
	const thisMonth = timestamp.getMonth() + 1
	const thisDay = timestamp.getDate()
	const thisHour = timestamp.getHours()
	const thisMinute = timestamp.getMinutes() > 9 ? timestamp.getMinutes() : `0${timestamp.getMinutes()}`
	const ampm = thisHour > 12 ? 'PM' : 'PM'

	return `${thisHour > 12 ? thisHour - 12 : thisHour}:${thisMinute}${ampm} ${thisMonth}/${thisDay}/${thisYear}`
}
