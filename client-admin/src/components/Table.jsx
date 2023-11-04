import React from "react"

export default function Table({tHeads, dataArr, children}) {
    const renderChildren = () => {
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                data: dataArr
            })
        })
    }


    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr>
                        {tHeads.map((head, i) => (
                            <th key={i}>{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {renderChildren()}
                </tbody>
            </table>
        </div>
    )
}
