import { useEffect, useState } from 'react';
import Country from './Country';

function Main() {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data);
      })
      .catch((error) => {
        console.error('Somethin went wrong grr:', error);
      });
  }, []);

  return (
    <main className='min-h-screen bg-sky-950 flex flex-col items-center'>
      <form className='flex flex-col gap-y-6 pt-6 pb-24 w-96'>
        <input
          className='bg-sky-900 w-full text-sky-100 placeholder:text-sky-100 py-4 px-6 rounded-md'
          type='search'
          placeholder='Search for a country...'
        />
        <select className=' max-w bg-sky-900 text-sky-100 py-4 px-6 rounded-md'>
          <option value='default' disabled>
            Filter by Region
          </option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </form>
      {countryData !== null &&
        countryData.map((country) => (
          <Country key={country.name} countryData={country} />
        ))}
    </main>
  );
}

export default Main;
