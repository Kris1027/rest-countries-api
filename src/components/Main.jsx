import { useEffect, useState } from 'react';
import Country from './Country';

function Main() {
  const [countryData, setCountryData] = useState(null);
  const [filter, setFilter] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

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

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  function handleRegionChange(e) {
    setSelectedRegion(e.target.value);
  }

  return (
    <main className='min-h-screen bg-sky-950 flex flex-col items-center'>
      <form className='flex flex-col gap-y-6 pt-6 pb-24 w-96'>
        <input
          className='bg-sky-900 w-full text-sky-100 placeholder:text-sky-100 py-4 px-6 rounded-md'
          type='search'
          placeholder='Search for a country...'
          value={filter}
          onChange={handleFilterChange}
        />
        <select
          className='max-w bg-sky-900 text-sky-100 py-4 px-6 rounded-md'
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value='all'>Filter by Region</option>
          <option value='Africa'>Africa</option>
          <option value='Americas'>Americas</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </form>
      {countryData !== null &&
        countryData
          .filter((country) =>
            country.name.common.toLowerCase().includes(filter.toLowerCase())
          )
          .filter((country) =>
            selectedRegion === 'all' ? true : country.region === selectedRegion
          )
          .map((country) => (
            <Country key={country.name.common} countryData={country} />
          ))}
    </main>
  );
}

export default Main;
