import styles from "./FilmCard.module.css";
import { NavLink } from "react-router-dom";

const FilmCard = ({ id, title, year, rating, image}) => {
  return (
    <NavLink to={`/movies/${id}`} className={styles.card}>
      <img src={`https://image.tmdb.org/t/p/original${image}`} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.year}>Year of release: {year}</p>
      <p className={styles.rating}> Rating: {rating}</p>
    </NavLink>
  );
};
export default FilmCard;
