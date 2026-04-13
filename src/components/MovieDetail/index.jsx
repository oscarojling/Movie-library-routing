import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieDetail.module.css";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_ENDPOINT;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  return (
    <div className={styles.container}>
      {movie && (
        <div className={styles.card}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            className={styles.image}
          />
          <div className={styles.info}>
            <h1 className={styles.title}>{movie.title}</h1>
            <p className={styles.overview}>{movie.overview}</p>
            <p className={styles.rating}> Rating: {movie.vote_average}</p>
            <p className={styles.year}> {movie.release_date}</p>
            <div className={styles.genres}>
              {movie.genres.map((genre) => (
                <span key={genre.id} className={styles.genre}>
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
