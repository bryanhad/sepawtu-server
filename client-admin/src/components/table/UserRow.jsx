export default function UserRow({ user }) {
    return (
        <tr>
            <td>{user.id}</td>
            <td>
                <div className="flex gap-2 items-center">
                    <div className="w-[30px] h-[30px] rounded-full bg-slate-100">
                        <img
                            src={user.profilePicture}
                            alt={``}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col text-sm">
                        <p className="max-w-[150px] truncate">
                            {user.username}
                        </p>
                        <p className="max-w-[150px] truncate">{user.email}</p>
                    </div>
                </div>
            </td>
        </tr>
    )
}
