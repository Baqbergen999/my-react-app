import { useState, useEffect } from "react";
import "./Search.css";

const API_KEY = "17dec6d0";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`;

export default function MovieList() {
  const [movies, setMovies] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search.slice(0, 10));
        } else {
          setError("No movies found.");
        }
      } catch {
        setError("Something went wrong!");
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Top 10 Movies</h1>
      {error && <p className="error">{error}</p>}
      <ul className="movies-grid">
        {movies.map((movie) => (
          <li key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title} ({movie.Year})</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
