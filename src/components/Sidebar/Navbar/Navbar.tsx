import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";

// Типизация для setActive
const setActive = ({ isActive }: { isActive: boolean }): string =>
  `${classes.navbar__menuLink} ${
    isActive ? classes.navbar__menuLinkActive : ""
  }`;

type NavItem = {
  to: string;
  label: string;
};

const navItems: NavItem[] = [
  { to: "/profile", label: "Профиль" },
  { to: "/messages", label: "Сообщения" },
  { to: "/friends", label: "Друзья" },
  { to: "/photos", label: "Фото" },
  { to: "/music", label: "Музыка" },
  { to: "/settings", label: "Настройки" },
];

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <ul className={classes.navbar__menu}>
        {navItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} className={setActive}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
