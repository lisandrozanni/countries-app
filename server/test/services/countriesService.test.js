const { fetchCountries } = require('../../src/services/countriesService');
const { Country } = require('../../src/db/models');
const { Op } = require('sequelize');

jest.mock('../../src/db/models', () => {
  const mockCountry = {
    findAll: jest.fn(),
    sum: jest.fn()
  };
  return { Country: mockCountry };
});

describe('Countries service', () => {
  beforeEach(() => {
    Country.findAll.mockClear();
    Country.sum.mockClear();
  });

  it('fetches countries based on query and calculates percentage', async () => {
    const mockCountries = [
      { name: 'India', population: 1000 },
      { name: 'Indonesia', population: 500 }
    ];
    const mockTotalPopulation = 1500;

    Country.findAll.mockResolvedValue(mockCountries);
    Country.sum.mockResolvedValue(mockTotalPopulation);

    const result = await fetchCountries('Ind');

    expect(result).toEqual([
      { name: 'India', population: 1000, percentage: '66.67%' },
      { name: 'Indonesia', population: 500, percentage: '33.33%' }
    ]);

    expect(Country.findAll).toHaveBeenCalledWith({
      where: {
        name: {
          [Op.like]: '%Ind%'
        }
      },
      limit: 5
    });
    expect(Country.sum).toHaveBeenCalledWith('population');
  });
});
