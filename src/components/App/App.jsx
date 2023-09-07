// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import SharedLayout from '../SharedLayout/SharedLayout';

// const Home = lazy(() => import('../../page/Home/Home'));
// const MoviesDetails = lazy(() =>
//   import('../../page/MovieDetails/MovieDetails')
// );
// const Movies = lazy(() => import('../../page/Movies/Movies'));
// const Cast = lazy(() => import('../Cast/Cast'));
// const Reviews = lazy(() => import('../Reviews/Reviews'));

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route path="movies" element={<Movies />} />
//         <Route path="movies/:movieId" element={<MoviesDetails />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//           <Route path="about" element={<Navigate to="/about" />} />
//         </Route>
//       </Route>
//     </Routes>
//   );
// };


import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from '../SharedLayout/SharedLayout';
import About from '../../page/About/About'; 

const Home = lazy(() => import('../../page/Home/Home'));
const MoviesDetails = lazy(() =>
  import('../../page/MovieDetails/MovieDetails')
);
const Movies = lazy(() => import('../../page/Movies/Movies'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="about" element={<About />} /> 
          <Route path="about" element={<Navigate to="/about" />} />
        </Route>
      </Route>
    </Routes>
  );
};

