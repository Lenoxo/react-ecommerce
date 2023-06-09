import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'
  let email = ''

  const handleLogout = () => {
    // Maneja el cierre de sesión
    context.setLogged(false)
    localStorage.setItem('logged', 'false')
  }
  
  if (context.logged) {
    // Si el usuario ha iniciado sesión, toma del localStorage su dirección de correo electrónico.
    email = JSON.parse(localStorage.getItem('user-data')).email
  }

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          {/* Enlace al inicio */}
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          {/* Enlace a la categoría "Clothes" */}
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li>
          {/* Enlace a la categoría "Electronics" */}
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li>
          {/* Enlace a la categoría "Furnitures" */}
          <NavLink
            to='/furnitures'
            onClick={() => context.setSearchByCategory('furnitures')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Furnitures
          </NavLink>
        </li>
        <li>
          {/* Enlace a la categoría "Toys" */}
          <NavLink
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Toys
          </NavLink>
        </li>
        <li>
          {/* Enlace a la categoría "Others" */}
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        {/* Si el usuario ha iniciado sesión */}
        {context.logged && (
          <>
            <li className='text-black/60'>
            {/* Mostrar el correo electrónico del usuario */}
              {email}
            </li>
            {/* Enlace a "My Orders" */}
            <li>
              <NavLink
                to='/my-orders'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                My Orders
              </NavLink>
            </li>
            {/* Enlace a "My Account" */}
            <li>
              <NavLink
                to='/my-account'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                My Account
              </NavLink>
            </li>
            {/* Enlace para cerrar sesión */}
            <li>
              <NavLink
                to='/login'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                onClick={handleLogout}>
                Sign Out
              </NavLink>
            </li>
            <li className='flex items-center'>
              {/* Icono del carrito de compras */}
              <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
              {/* Mostrar la cantidad de productos en el carrito */}
              <div>{context.cartProducts.length}</div>
            </li>
          </>
        )}
        {/* Si el usuario no ha iniciado sesión */}
        {!context.logged && (
          <li>
            {/* Enlace para iniciar sesión */}
            <NavLink
              to='/login'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Sign In
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar