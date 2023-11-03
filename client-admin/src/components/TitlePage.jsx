export default function TitlePage({className, children}) {
  return (
    <p className={`text-2xl font-bold text-slate-700 ${className}`}>{children}</p>
  )
}
