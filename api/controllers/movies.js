module.exports = {
  getMovies,
  getMovie
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
