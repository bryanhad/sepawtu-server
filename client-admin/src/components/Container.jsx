export default function Container({className, children, noPadding}) {
  return (
    <div className={`bg-white ${noPadding ? '' : 'p-4'} shadow-md rounded-md ${className}`}>
        {children}
    </div>
  )
}
