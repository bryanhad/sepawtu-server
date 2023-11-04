export default function Button({ children, color, type, className, onClick }) {
    let colorStyle
    const primary = 'bg-blue-400 text-white'
    const danger = 'bg-red-400 text-white'
    const success = 'bg-emerald-400 text-white'
    const defaultStyle = 'bg-slate-400 text-white'
    
    switch (color) {
        case 'primary':  colorStyle = primary; break
        case 'danger':  colorStyle = danger; break
        case 'success':  colorStyle = success; break
        default: colorStyle = defaultStyle; break
    }


    return (
        <button onClick={onClick} type={type} className={`rounded-md ${colorStyle} ${className}`}>
            {children}
        </button>
    )
}
