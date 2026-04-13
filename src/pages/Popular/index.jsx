import useFetch from "../../hooks/useFetch";
import FilmGrid from "../../components/FilmGrid";

const Popular = () => {
  const data = useFetch("movie/popular");

  return <>{data && <FilmGrid films={data} />}</>;
};

export default Popular;
