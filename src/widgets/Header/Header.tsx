import { NavLink } from "react-router";
import styles from "./Hader.module.css";
import { CLIENT_ROUTES } from "../../shared/enums/clientRoutes";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        Header
        <nav className={styles.nav}>
        <NavLink
          to={CLIENT_ROUTES.MAIN}
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ""}`
          }
        >
          Главная
        </NavLink>
        <NavLink
          to={CLIENT_ROUTES.STOCK}
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ""}`
          }
        >
          Склад
        </NavLink>
        </nav>
      </header>
    </>
  );
}
