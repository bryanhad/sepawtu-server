export default function stringToDateFormat(dateStr) {
    const date = new Date(dateStr)
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
    const formattedDate = date.toLocaleDateString("id-ID", options)
    const hour = date.getHours()
    const minute = date.getMinutes()
    const formattedMinute = minute < 10 ? '0' + minute : minute
    const formattedTime = `${hour}:${formattedMinute}`
    return {date:formattedDate, time:formattedTime}
}