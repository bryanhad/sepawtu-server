export default function Table({ tHeads, children }) {
    return (
        <div className="overflow-x-auto flex-[1]">
            <table className="table">
                <thead>
                    <tr>
                        {tHeads.map((head, i) => (
                            <th key={i}>{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    )
}
