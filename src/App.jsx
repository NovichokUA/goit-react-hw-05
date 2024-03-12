import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import { Toaster } from "react-hot-toast";
import { Spiner } from "./components/spiner/Spiner";

import "./App.css";

const HomePages = lazy(() => import("./pages/homePage/HomePage"));
const Navigation = lazy(() => import("./components/navigation/Navigation"));
const MoviesPage = lazy(() => import("./pages/moviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/movieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/movieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/movieReviews/MovieReviews")
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Spiner />}>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="previews" element={<MovieReviews />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
