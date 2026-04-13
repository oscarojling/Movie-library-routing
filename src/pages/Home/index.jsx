import { NavLink } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import FilmGrid from "../../components/FilmGrid";
import styles from "./Home.module.css";
import { motion } from "motion/react";

const Home = () => {
  const upcoming = useFetch("movie/upcoming");
  const topRated = useFetch("movie/top_rated");
  const popular = useFetch("movie/popular");
  return (
    <div>
      <section className={styles.hero}>
        <h1 className={styles.title}>Movie library</h1>
        <p className={styles.subTitle}>
          Explore and find your next movie to watch!
        </p>
        <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.85 }}>
          <NavLink to="/movies/popular" className={styles.button}>
            Browse Movies
          </NavLink>
        </motion.div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.subHeader}>Most popular Movies</h2>
          <NavLink to="/movies/popular" className={styles.seeAll}>
            See all
          </NavLink>
        </div>
        {popular && <FilmGrid films={popular.slice(0, 5)} />}
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.subHeader}>Top-Rated Movies</h2>
          <NavLink to="/movies/top-rated" className={styles.seeAll}>
            See all
          </NavLink>
        </div>
        {topRated && <FilmGrid films={topRated.slice(0, 5)} />}
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.subHeader}>Upcoming Movies</h2>
          <NavLink to="/movies/upcoming" className={styles.seeAll}>
            See all
          </NavLink>
        </div>
        {upcoming && <FilmGrid films={upcoming.slice(0, 5)} />}
      </section>
    </div>
  );
};

export default Home;
