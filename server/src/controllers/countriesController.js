const countriesService = require('../services/countriesService');

async function searchCountries(req, res) {
  const query = req.query.q;

  const countriesData = await countriesService.fetchCountries(query);
  
  if (countriesData.length === 0) {
    return res.status(204).send();
  }

  res.json(countriesData);
}

module.exports = {
  searchCountries
};
