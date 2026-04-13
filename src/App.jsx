import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Layout from "./pages/Layout";
import Favorites from "./pages/Favorites";
import Upcoming from "./pages/Upcoming";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import MovieDetail from "./components/MovieDetail";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}>
            <Route path="popular" element={<Popular />} />
            <Route path="top-rated" element={<TopRated />} />
            <Route path="upcoming" element={<Upcoming />} />
            <Route path=":id" element={<MovieDetail />} />
          </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
