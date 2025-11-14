export default function Modal() {
console.log("Modal component rendered for: ", movie.title);
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button">&times;</span>
        <h2>{movie.title}</h2>
        <p>Fecha de publicacion: {movie.release_date}</p>
        <p>Resumen: {movie.overview}</p>
        <p>Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
}