import styles from "./FavoriteCard.module.css";
import { getImageURL } from "../../utils/image";
import { motion } from "motion/react";

const FavoriteCard = ({ title, year, genre, imdb, rt, image }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.title}>{title}</h2>
      <img src={getImageURL(image)} alt={title} className={styles.image}></img>
      <p className={styles.year}>Year of release: {year}</p>
      <div className={styles.genres}>
        <span className={styles.genre}>{genre}</span>
      </div>
      <a className={styles.link} href={imdb}>
        IMDB
      </a>
      <a className={styles.link} href={rt}>
        Rotten Tomatoes
      </a>
    </motion.div>
  );
};
export default FavoriteCard;
