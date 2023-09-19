const API_URL = 'http://localhost:3001';

export default async function getCountries(query) {
  try {
    const response = await fetch(`${API_URL}/countries?q=${query}`);

    if (response.status === 204) {
      return {
        statusCode: response.status,
        countries: []
      };
    }

    const data = await response.json();
    
    return {
      statusCode: response.status,
      countries: data,
    };
  } catch (error) {
    console.error(error);
  }
}
