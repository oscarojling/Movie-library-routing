import films from "../../data/films";
import FavoriteCard from "../../components/FavoriteCard";
import styles from "./Favorites.module.css";

const Favorites = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        My Favourite movies I watched so far in 2026
      </h1>
      <div className={styles.grid}>
        {films.map((film, index) => (
          <FavoriteCard
            key={index}
            title={film.title}
            year={film.year}
            genre={film.genre}
            image={film.image}
            imdb={film.imdb}
            rt={film.rt}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
