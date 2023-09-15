const { Op } = require('sequelize');
const { Country } = require('../db/models');

async function fetchCountries(query) {
  const countries = await Country.findAll({
    where: {
      name: {
        [Op.like]: `%${query}%`
      }
    },
    limit: 5
  });

  const totalPopulation = await Country.sum('population');

  return countries.map(country => ({
    name: country.name,
    population: country.population,
    percentage: ((country.population / totalPopulation) * 100).toFixed(2) + '%'
  }));
}

module.exports = {
  fetchCountries
};
