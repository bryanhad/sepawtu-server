import {CiBoxList} from 'react-icons/ci'
import {BsImages} from 'react-icons/bs'
import {LuShapes} from 'react-icons/lu'
import {FiUsers} from 'react-icons/fi'
import { NavLink, useLocation, } from 'react-router-dom'
import { useRef } from 'react'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

export default function SideNav({className}) {
    const linkRef = useRef(null)
    const location = useLocation();

    const links = [
        {name: 'Products', to: '/', icon: <CiBoxList/>},
        {name: 'Images', to: '/images', icon: <BsImages/>},
        {name: 'Styles', to: '/styles', icon: <LuShapes/>},
        {name: 'Users', to: '/users', icon: <FiUsers/>},
    ]
    // products, Images, Styles, Users, 
  return (
    <nav className={`${className} flex-col bg-background p-4 text-slate-300`}>
        <h1 className="text-xl">LOGO</h1>
        {links.map((link, i) => (
            <NavLink ref={linkRef} to={link.to} key={i} className='flex items-center gap-2'>
                {link.icon}
                <p>{link.name}</p>
                {link.to === location.pathname && <MdOutlineArrowForwardIos/>}
            </NavLink>
        ))}
    </nav>
  )
}
