import { useState } from "react";
import "./Search.css";

const API_KEY = "17dec6d0";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch {
      setError("Something went wrong!");
      return null;
    }
  };

  const searchMovies = async () => {
    if (!query) return;
    setError(null);

    const data = await fetchData(`${API_URL}&s=${query}`);

    if (data?.Response === "True") {
      setMovies(data.Search);
    } else {
      setError(data?.Error || "No movies found.");
      setMovies([]);
    }
  };

  const fetchMovieDetails = async (id: string) => {
    const data = await fetchData(`${API_URL}&i=${id}`);

    if (data?.Response === "True") {
      setSelectedMovie(data);
    } else {
      setError("Failed to load movie details!");
    }
  };

  return (
    <div className="container">
      {selectedMovie ? (
        <div className="movie-details">
          <h2>{selectedMovie.Title} ({selectedMovie.Year})</h2>
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
          <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
          <p><strong>Director:</strong> {selectedMovie.Director}</p>
          <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
          <p><strong>Runtime:</strong> {selectedMovie.Runtime}</p>
          <p className="plot">{selectedMovie.Plot}</p>
          <button onClick={() => setSelectedMovie(null)} className="back-button">Back</button>
        </div>
      ) : (
        <>
          <h1 className="title">Movie Search</h1>
          <div className="search-bar">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter movie name..."
            />
            <button onClick={searchMovies} className="search-button">Search</button>
          </div>
          {error && <p className="error">{error}</p>}
          <ul className="movies-grid">
            {movies.map((movie) => (
              <li key={movie.imdbID} className="movie-card" onClick={() => fetchMovieDetails(movie.imdbID)}>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title} ({movie.Year})</h3>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
