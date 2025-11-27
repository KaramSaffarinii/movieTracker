const { readMovies, writeMovies } = require("../data/movies.json");

function addMovie(user, title, description, year, genre) {
  if (user.role !== "director") {
    console.log("only directors can add movies");
    return null;
  }

  const movies = readMovies();

  const newMovie = {
    id: Date.now(),
    title,
    description,
    year,
    genre,
  };

  movies.push(newMovie);
  writeMovies(movies);

  console.log("Film added Successfully");
  return newMovie;
}

module.exports = {
  addMovie,
};
