import { NavLink } from 'react-router-dom'

const Nabvar = () => {
  const activeStyle: string = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center sticky top-0 z-50 w-full px-8 py-5 text-sm font-light bg-white shadow-md'>
      <ul className='flex items-center gap-3'>
        <li className='font-bold text-lg text-cyan-800 '>
          <NavLink to='/'>Shopi</NavLink>
        </li>
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? activeStyle : '')}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furniture'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink to='/toys' className={({ isActive }) => (isActive ? activeStyle : '')}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li>
          <NavLink to='#' className='text-black/50'>
            email@gmail.com
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Sign In
          </NavLink>
        </li>
        <li>🛒 0</li>
      </ul>
    </nav>
  )
}

export default Nabvar
