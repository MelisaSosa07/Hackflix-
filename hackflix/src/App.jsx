import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import RatingFilter from "../components/RatingFilter";
import MovieGrid from "../components/MovieGrid";
import movies from "../data/movies.json";

function App() {
  return (
    <>
      <Navbar />

      <Banner />

      <main className="container">

        <RatingFilter />

        <MovieGrid movies={movies} />

      </main>
    </>
  );
}

export default App;