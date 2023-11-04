import stringToDateFormat from "../helper/stringToDateFormat"

export default function StringToDate({label, strDate}) {
    return (
        <div className="flex gap-2 items-center">
            <p>{label}</p>
            <span className="flex gap-2 items-center">
                <p>{stringToDateFormat(strDate).date},</p>
                <p>{stringToDateFormat(strDate).time}</p>
            </span>
        </div>
    )
}
