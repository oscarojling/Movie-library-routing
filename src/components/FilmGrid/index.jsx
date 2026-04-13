import FilmCard from "../FilmCard";
import styles from "./FilmGrid.module.css";
import { motion } from "motion/react";

const FilmGrid = ({ films }) => {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {films.map((film, index) => (
        <FilmCard
          key={index}
          id={film.id}
          title={film.title}
          year={film.release_date}
          rating={film.vote_average}
          image={film.poster_path}
        />
      ))}
    </motion.div>
  );
};

export default FilmGrid;
