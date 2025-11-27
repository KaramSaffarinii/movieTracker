const { readMovies, writeMovies } = require("../data/movies.json");

function getAllMovies() {
  return readMovies();
}

function rateMovie(user, movieId, rate) {
  const movies = readMovies();
  const movie = movies.find((m) => m.id === movieId);
  if (!movie) {
    return null;
  }

  if (!movie.ratings) movie.ratings = [];
  movie.ratings.push(rate);

  const sum = movie.ratings.reduce((acc, val) => acc + val, 0);
  movie.rating = +(sum / movie.ratings.length).toFixed(1);

  writeMovies(movies);
  return movie;
}

module.exports = {
  getAllMovies,
  rateMovie,
};
