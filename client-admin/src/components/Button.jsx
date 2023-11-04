export default function Button({ children, color, type, className }) {
    let colorStyle
    const primary = 'bg-blue-400 text-white'
    const danger = 'bg-red-400 text-white'

    
    switch (color) {
        case 'primary':  colorStyle = primary; break
        case 'danger':  colorStyle = danger; break
    }


    return (
        <button type={type} className={`rounded-md ${colorStyle} ${className}`}>
            {children}
        </button>
    )
}