import { useState } from 'react';
import Country from './Country';
import { useTheme } from '../contexts/themeContext';
import { useData } from '../contexts/dataContext';

function Main() {
  const { isDarkMode } = useTheme();
  const { countryData } = useData();

  const [filter, setFilter] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  function handleRegionChange(e) {
    setSelectedRegion(e.target.value);
  }

  return (
    <main
      className={`min-h-screen ${
        isDarkMode ? 'bg-sky-950' : 'bg-sky-200'
      } flex flex-col items-center duration-200 ease-linear`}
    >
      <form className='flex flex-col gap-y-6 pt-6 pb-24 w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px]'>
        <input
          className={`${
            isDarkMode
              ? 'bg-sky-900 placeholder:text-sky-100 text-sky-100'
              : 'bg-sky-100 placeholder:text-sky-900 text-sky-900'
          } py-4 px-6 rounded-md focus:ring-0 focus:outline-none duration-200 ease-linear`}
          type='search'
          placeholder='Search for a country...'
          value={filter}
          onChange={handleFilterChange}
        />
        <select
          className={`max-w ${
            isDarkMode ? 'bg-sky-900 text-sky-100' : 'bg-sky-100 text-sky-900'
          } py-4 px-6 rounded-md focus:ring-0 focus:outline-none duration-200 ease-linear`}
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
      <div className='flex flex-wrap justify-center'>
        {countryData !== null &&
          countryData
            .filter((country) =>
              country.name.common.toLowerCase().includes(filter.toLowerCase())
            )
            .filter((country) =>
              selectedRegion === 'all'
                ? true
                : country.region === selectedRegion
            )
            .map((country) => (
              <Country key={country.name.common} countryData={country} />
            ))}
      </div>
    </main>
  );
}

export default Main;
