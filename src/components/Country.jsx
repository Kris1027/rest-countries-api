import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/themeContext';

function Country({ countryData }) {
  const { isDarkMode } = useTheme();

  if (!countryData) return <div>Loading...</div>;

  function formatPopulation(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return (
    <Link to={`/${countryData.name.common}`}>
      <div
        className={`${
          isDarkMode ? 'bg-sky-900 text-sky-100' : 'bg-sky-100 text-sky-900'
        } flex flex-col w-96 m-6 rounded-md overflow-hidden duration-100 ease-linear cursor-pointer active:scale-90 hover:scale-110`}
      >
        <img src={countryData.flags.png} alt='flag' />
        <div className='flex flex-col p-10'>
          <h2 className='font-bold text-xl pb-4'>{countryData.name.common}</h2>
          <p>
            <strong>Population:</strong>{' '}
            {formatPopulation(countryData.population)}
          </p>
          <p>
            <strong>Region:</strong> {countryData.region}
          </p>
          <p>
            <strong>Capital:</strong> {countryData.capital}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Country;
