import { useState, useEffect } from "react";
import { GetMoviesPopular } from "../../MovieApi";
import MovieList from "../../components/moviesList/MovieList";
import LoadMoreBtn from "../../components/loadMoreBtn/LoadMoreBtn";
import { Spiner } from "../../components/spiner/Spiner";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        setError(false);
        const response = await GetMoviesPopular(page);
        setMovies((prevMovies) => [...prevMovies, ...response.results]);
        setTotalPage(response.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [page]);

  const handalLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <MovieList movies={movies} />

      {movies.length > 0 && !isLoading && totalPage !== page && (
        <LoadMoreBtn onClick={handalLoadMore} />
      )}

      {isLoading && <Spiner />}

      {error && <ErrorMessage error={error} />}
    </div>
  );
}

export default HomePage;
