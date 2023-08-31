import Home from 'page/Home/Home';
import Movies from 'page/Movies/Movies';
import MovieDetails from 'page/MovieDetails/MovieDetails';
// import NotFound from "page/NotFound/NotFound";
import { Routes, Route, Link } from 'react-router-dom';
import { FilmsList } from './FilmsList/FilmsList';


export const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          {/* <li>
            <Link to="/movies/:movieId">MovieDetails</Link>
          </li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" elements={<Home />}></Route>
        <Route path="/movies" elements={<Movies />}></Route>
        <Route path="/movies/:movieId" elements={<MovieDetails />}></Route>
        {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>
      <FilmsList/>
      <MovieDetails/>
    </div>
  );
};
