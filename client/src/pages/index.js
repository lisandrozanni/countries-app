import { useState } from 'react';
import Head from 'next/head'
import { Typography } from '@material-ui/core';
import getCountries from './api/countries';
import { CountriesTable, SearchBar, Message, Spinner } from '@/components';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusCode, setStatusCode] = useState(false);
  
  const handleSearch = async (query) => {
    setLoading(true);

    try {
      const { statusCode, countries } = await getCountries(query);
      
      setStatusCode(statusCode);
      setCountries(countries);      
    } catch (error) {
      console.error(error);
    }
    
    setLoading(false);
  }

  let message;
  if (statusCode === 400) message = <Message text={'Debe contener 3 o más caracteres'} />
  if (statusCode === 204) message = <Message text={'No se encontraron resultados'} />

  return (
    <>
      <Head>
        <title>Countries App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <Typography className='description'>Busque un país para ver su población y el porcentaje de habitantes.</Typography>
        <SearchBar onSearch={handleSearch} />

        {loading && <Spinner />}
        {countries.length > 0 && <CountriesTable countries={countries} />}
        {message}
      </main>
    </>
  )
}
