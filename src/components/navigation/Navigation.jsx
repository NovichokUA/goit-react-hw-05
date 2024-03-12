import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.isActive);
        }}
      >
        Home Page
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.isActive);
        }}
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
