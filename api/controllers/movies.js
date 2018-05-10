module.exports = {
  getMovies,
  getMovie,
  newMovie,
  deleteMovie
};

function getMovies(req, res) {
  console.log('Devolvemos todas las películas!!');
  const movies = [
    { name: 'Matrix' }
  ];
  res.json(movies);
}

function getMovie(req, res) {
  console.log('Buscando por la película con id', req.swagger.params.movie_uuid.value);
  res.json({ name: 'Aquí tienes tu película' });
}

function newMovie(req, res) {
  console.log('Creando una nueva película', req.swagger.params.movie.value);
  const newMovie = {
    name: req.swagger.params.movie.value.name
  };
  res.json(newMovie);
}

function deleteMovie(req, res) {
  console.log('Borramos la película con id', req.swagger.params.movie_uuid.value);
  res.json({ message: 'Película borrada!' });
}
