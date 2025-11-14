export default function MovieCard({ movie }) {
console.log("MovieCard component rendered for:", movie.title);
  return (
    <article className="movie-card">
      <img src={movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>⭐ {movie.vote_average}</p>
    </article>
  );
}