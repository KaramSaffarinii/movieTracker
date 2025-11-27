const fs = require("fs");
const path = require("path");

const movie_path = path.join(__dirname, "..", "data", "movies.json");

function readMovies() {
  if (!fs.existsSync(movie_path)) return [];

  return JSON.parse(fs.readFileSync(movie_path, "utf8") || "[]");
}

function writeMovies(data) {
  fs.writeFileSync(moviesPath, JSON.stringify(data, null, 2), "utf8");
}

module.exports = { readMovies, writeMovies };
