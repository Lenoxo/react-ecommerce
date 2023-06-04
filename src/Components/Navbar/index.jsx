import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../pages/Context"

function Navbar() {
  const context = useContext(ShoppingCartContext)
  let activeStyle = "underline underline-offset-4"
  return (
    <nav className="flex justify-between items-center fixed z-1 w-full py-4 px-8 text-sm font-light top-0">
      <ul className="flex items-center gap-3">
        {/* Este es el logo de la página (por ahora), por lo que está con unos estilos diferentes */}
        <li className="font-semibold text-lg">Shopi</li>
        {/* En el resto de items, mando por props to y activeStyle */}
        <NavbarItem to="/" activeStyle={activeStyle} category={null}>All</NavbarItem>
        <NavbarItem to="/clothes" activeStyle={activeStyle} category={'Clothes'}>Clothes</NavbarItem>
        <NavbarItem to="/electronics" activeStyle={activeStyle} category={'Electronics'}>Electronics</NavbarItem>
        <NavbarItem to="/furnitures" activeStyle={activeStyle} category={'Furnitures'}>Furnitures</NavbarItem>
        <NavbarItem to="/toys" activeStyle={activeStyle} category={'Toys'}>Toys</NavbarItem>
        <NavbarItem to="/others" activeStyle={activeStyle} category={'Others'}>Others</NavbarItem>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">example@example.com</li>
        <NavbarItem to="/my-orders" activeStyle={activeStyle} category={null}>My Orders</NavbarItem>
        <NavbarItem to="/sign-in" activeStyle={activeStyle} category={null}>Sign In</NavbarItem>
        <li className="flex items-center">
          {/* Este es el icono del carrito de compras (ShoppingCart) */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
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

export { Navbar }
