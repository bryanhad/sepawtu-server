export default function MiniProfile({ profilePicture, name, email }) {
    return (
        <div className="flex gap-2 items-center">
            <div className="w-[30px] h-[30px] rounded-full bg-slate-100">
                <img
                    src={profilePicture}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col text-sm">
                <p className="max-w-[150px] truncate">{name}</p>
                {email && <p className="max-w-[150px] truncate">{email}</p>}
            </div>
        </div>
    )
}
