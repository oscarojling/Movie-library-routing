import useFetch from "../../hooks/useFetch";
import FilmGrid from "../../components/FilmGrid";

const TopRated = () => {
  const data = useFetch("movie/top_rated");

  return <>{data && <FilmGrid films={data} />}</>;
};

export default TopRated;
