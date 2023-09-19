const countriesService = require('../services/countriesService');

async function searchCountries(req, res) {
  const query = req.query.q;

  const countriesData = await countriesService.fetchCountries(query);
  
  if (countriesData.length === 0) {
    return res.status(404).json({ message: 'No results found.' });
  }

  res.json(countriesData);
}

module.exports = {
  searchCountries
};
