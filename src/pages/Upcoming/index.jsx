import useFetch from "../../hooks/useFetch";
import FilmGrid from "../../components/FilmGrid";

const Upcoming = () => {
  const data = useFetch("movie/upcoming");

  return <>{data && <FilmGrid films={data} />}</>;
};

export default Upcoming;
