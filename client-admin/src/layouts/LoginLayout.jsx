import { Outlet } from 'react-router-dom'

export default function LoginLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200">
        <Outlet/>
    </div>
  )
}
