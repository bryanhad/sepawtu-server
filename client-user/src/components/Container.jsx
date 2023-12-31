export default function Container({children, className}) {
  return (
    <div className={`max-w-[1300px] w-full mx-auto px-2 md:px-4 ${className}`}>
        {children}
    </div>
  )
}
