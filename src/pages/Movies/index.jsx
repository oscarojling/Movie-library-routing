import { Outlet, NavLink } from "react-router-dom";
import styles from "./Movies.module.css";

const Movies = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
          to="/movies/popular"
        >
          Popular
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
          to="/movies/top-rated"
        >
          Top Rated
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
          to="/movies/upcoming"
        >
          Upcoming
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Movies;
