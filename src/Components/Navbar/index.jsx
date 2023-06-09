import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const NavbarLink = ({ to, onClick, children, isActive }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={isActive ? 'underline underline-offset-4' : undefined}
  >
    {children}
  </NavLink>
)

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  let email = ''
  
  if (context.logged) {
    email = JSON.parse(localStorage.getItem('user-data')).email
  }
  
  const handleLogout = () => {
    localStorage.setItem('logged', 'false')
    context.setLogged(false)
  }


  const handleCategoryClick = (category) => {
    if (!context.logged) {
      window.location.href = '/login' // Redirigir a la página de login
    } else {
      context.setSearchByCategory(category)
    }
  }

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavbarLink to="/" onClick={() => handleCategoryClick()}>
            Shopi
          </NavbarLink>
        </li>
        <li>
          <NavbarLink
            to="/"
            onClick={() => handleCategoryClick()}
            isActive={false}
          >
            All
          </NavbarLink>
        </li>
        <li>
          <NavbarLink
            to="/clothes"
            onClick={() => handleCategoryClick('clothes')}
            isActive={false}
          >
            Clothes
          </NavbarLink>
        </li>
        <li>
          <NavbarLink
            to="/electronics"
            onClick={() => handleCategoryClick('electronics')}
            isActive={false}
          >
            Electronics
          </NavbarLink>
        </li>
        <li>
          <NavbarLink
            to="/furnitures"
            onClick={() => handleCategoryClick('furnitures')}
            isActive={false}
          >
            Furnitures
          </NavbarLink>
        </li>
        <li>
          <NavbarLink
            to="/toys"
            onClick={() => handleCategoryClick('toys')}
            isActive={false}
          >
            Toys
          </NavbarLink>
        </li>
        <li>
          <NavbarLink
            to="/others"
            onClick={() => handleCategoryClick('others')}
            isActive={false}
          >
            Others
          </NavbarLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        {context.logged && (
          <>
            <li className="text-black/60">{email}</li>
            <li>
              <NavbarLink to="/my-orders" isActive={false}>
                My Orders
              </NavbarLink>
            </li>
            <li>
              <NavbarLink to="/my-account" isActive={false}>
                My Account
              </NavbarLink>
            </li>
            <li>
              <NavbarLink
                to="/login"
                isActive={false}
                onClick={handleLogout}
              >
                Sign out
              </NavbarLink>
            </li>
            <li className="flex items-center">
              <ShoppingBagIcon className="h-6 w-6 text-black" />
              <div>{context.cartProducts.length}</div>
            </li>
          </>
        )}
        {!context.logged && (
          <li>
            <NavbarLink to="/login" isActive={false}>
              Sign In
            </NavbarLink>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar