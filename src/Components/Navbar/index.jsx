import { NavLink } from "react-router-dom";

function Navbar() {
  let activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed z-1 w-full py-4 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        {/* Este es el logo de la página (por ahora), por lo que está con unos estilos diferentes */}
        <li className="font-semibold text-lg">
          Shopi
        </li>
        {/* En el resto de items, mando por props to y activeStyle */}
        <NavbarItem to="/" activeStyle={activeStyle}>All</NavbarItem>
        <NavbarItem to="/clothes" activeStyle={activeStyle}>Clothes</NavbarItem>
        <NavbarItem to="/electronics" activeStyle={activeStyle}>Electronics</NavbarItem>
        <NavbarItem to="/furnitures" activeStyle={activeStyle}>Furnitures</NavbarItem>
        <NavbarItem to="/toys" activeStyle={activeStyle}>Toys</NavbarItem>
        <NavbarItem to="/others" activeStyle={activeStyle}>Others</NavbarItem>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">example@example.com</li>
        <NavbarItem to="/my-orders">My Orders</NavbarItem>
        <NavbarItem to="/sign-in">Sign In</NavbarItem>
        <li>💼</li>
      </ul>
    </nav>
  );
}

// Aquí uso children para poner el texto en el interior de los elementos.
function NavbarItem({ to, activeStyle, children }) {
    return (
      <li>
        <NavLink
          to={to}
          className={({ isActive }) => (isActive ? activeStyle : "")}
        >
          {children}
        </NavLink>
      </li>
    )
  }

export { Navbar };
