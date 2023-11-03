export default function Container({className, children}) {
  return (
    <div className={`bg-white p-4 shadow-md rounded-md ${className}`}>
        {children}
    </div>
  )
}
