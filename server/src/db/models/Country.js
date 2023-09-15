const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {}

  Country.init({
    name: DataTypes.STRING,
    population: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Country'
  });

  return Country;
};
