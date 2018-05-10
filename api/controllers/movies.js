module.exports = {
  getMovies
};

function getMovies(req, res) {
  console.log('Devolvemos todas las películas!!');
  res.json({ name: 'Matrix' });
}
