import { useContext, useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../pages/Context"

function Navbar() {
  const context = useContext(ShoppingCartContext)
  const [hideNavbarItems, setHideNavbarItems] = useState(false)
  let activeStyle = "underline underline-offset-4"
  return (
    <nav className="flex flex-col lg:flex-row lg:justify-between lg:items-center fixed z-10 lg:w-screen py-4 px-8 text-sm font-light rounded-lg top-0 border-b-2 border-r-2 lg:border-r-0 bg-white dark:text-white dark:bg-zinc-900">
      {/* Este es el logo de la página (por ahora), por lo que está con unos estilos diferentes */}
      <h2 className="font-bold text-md cursor-default">Reactify</h2>
      <button className="flex justify-center lg:hidden" onClick={() => setHideNavbarItems(!hideNavbarItems)}>
        {/* Icono de mostrar/ocultar elementos del NavBar */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <ul className={`flex flex-col lg:items-center lg:flex-row gap-3 ${hideNavbarItems && 'hidden'}`}>
        {/* En el resto de items, mando por props to y activeStyle */}
        <NavbarItem to="/" activeStyle={activeStyle} category={null}>All</NavbarItem>
        <NavbarItem to="/clothes" activeStyle={activeStyle} category={'Clothes'}>Clothes</NavbarItem>
        <NavbarItem to="/electronics" activeStyle={activeStyle} category={'Electronics'}>Electronics</NavbarItem>
        <NavbarItem to="/furnitures" activeStyle={activeStyle} category={'Furnitures'}>Furnitures</NavbarItem>
        <NavbarItem to="/toys" activeStyle={activeStyle} category={'Toys'}>Toys</NavbarItem>
        <NavbarItem to="/others" activeStyle={activeStyle} category={'Others'}>Others</NavbarItem>
      </ul>
      <ul className={`flex flex-col lg:items-center lg:flex-row gap-3 ${hideNavbarItems && 'hidden'}`}>
        <ToggleDarkModeButton />
        <li className="text-black/60 dark:text-white/60">example@example.com</li>
        <NavbarItem to="/my-orders" activeStyle={activeStyle} category={null}>My Orders</NavbarItem>
        <NavbarItem to="/sign-in" activeStyle={activeStyle} category={null}>Sign In</NavbarItem>
        <li className="flex items-center">
        <button onClick={() => context.openCheckoutSideMenu()}>
          {/* Este es el icono del carrito de compras (ShoppingCart) */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </button>
          <div>
            {context.cartProducts.length}
          </div>
        </li>
      </ul>
    </nav>
  )
}

// Aquí uso children para poner el texto en el interior de los elementos.
function NavbarItem({ to, activeStyle, children, category }) {
  const context = useContext(ShoppingCartContext)
  return (
    <li>
      <NavLink
        to={to}
        onClick={() => context.setProductCategoryValue(category)}
        className={({ isActive }) => (isActive ? activeStyle : "")}
      >
        {children}
      </NavLink>
    </li>
  )
}

function ToggleDarkModeButton() {
  const [darkMode, setDarkMode] = useState(false)
  
  // Este es un efecto para activar/desactivar el darkmode solo cuando el estado cambia.
    useEffect(() => {
      const body = document.body
      darkMode ? body.classList.add('dark') : body.classList.remove('dark')
    }, [darkMode])
  
    return (
      <button className="first:mt-3 lg:first:mt-0" onClick={() => setDarkMode(!darkMode)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      </button>
    )
}

export { Navbar }
