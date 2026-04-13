import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.info}>Oscarboxd 2026</p>
      <nav className={styles.links}>
        <NavLink className={styles.link} to="/about">
          About
        </NavLink>
        <NavLink className={styles.link} to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
