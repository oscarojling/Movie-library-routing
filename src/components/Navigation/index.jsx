import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = ({ mobileMenu }) => {
  return (
    <nav className={`${styles.nav} ${mobileMenu ? styles.active : " "} `}>
      <NavLink className={styles.navItem} to="/">
        Home
      </NavLink>
      <NavLink className={styles.navItem} to="/movies/popular">
        Movies
      </NavLink>
      <NavLink className={styles.navItem} to="/about">
        About
      </NavLink>
      <NavLink className={styles.navItem} to="/favorites">
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navigation;
