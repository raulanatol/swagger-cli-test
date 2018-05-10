module.exports = {
  getMovies
};

function getMovies(req, res) {
  console.log('Devolvemos todas las películas!!');
  const movies = [
    { name: 'Matrix' }
  ];
  res.json(movies);
}
