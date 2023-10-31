export default function Container({children}) {
  return (
    <div className="max-w-[1280px] w-full mx-auto px-2 md:px-4">
        {children}
    </div>
  )
}
