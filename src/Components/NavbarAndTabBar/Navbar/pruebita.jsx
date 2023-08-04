import { NavLink } from "react-router-dom";
import { NavbarItem } from "../NavbarItem";

export function Nav() {
  return (
    <>
      <nav className="fixed inset-0 w-screen h-20 bg-zinc-300 rounded-lg flex justify-around">
        <NavLink
          to="/"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
            };
          }}
        >
          All
        </NavLink>
        <NavLink
          to="/furnitures"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
            };
          }}
        >
          Furnitures
        </NavLink>
      </nav>
    </>
  );
}
