import {RiMenu4Line} from 'react-icons/ri'

export default function NavBar({className}) {
  return (
    <nav className={`bg-background p-4 text-xl flex items-center justify-between text-white ${className}`}>
        <h1>LOGO</h1>
        <button className='p-2'>
            <RiMenu4Line/>
        </button>
    </nav>
  )
}
