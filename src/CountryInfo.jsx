import { Link, useParams } from 'react-router-dom';
import { useData } from './contexts/dataContext';
import { useTheme } from './contexts/themeContext';

function CountryInfo() {
  const { countryData } = useData();
  const { isDarkMode } = useTheme();

  const { countryName } = useParams();

  if (!countryData) return <div>Loading...</div>;

  const selectedCountry = countryData.find(
    (country) => country.name.common === countryName
  );

  if (!selectedCountry) {
    return <div>No match</div>;
  }

  function formatPopulation(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return (
    <div
      className={`${
        isDarkMode
          ? 'bg-sky-950 text-sky-100'
          : 'bg-sky-200 text-sky-950 transition-colors duration-200 ease-linear'
      } h-screen p-12`}
    >
      <Link to='/'>
        <button
          className={`${
            isDarkMode ? 'bg-sky-900 text-sky-100' : 'bg-sky-100 text-sky-950'
          } py-3 px-10 rounded-lg active:scale-90 hover:scale-110 transition-colors duration-200 ease-linear`}
        >
          Back
        </button>
      </Link>
      <div className='flex pt-12 flex-col lg:flex-row flex-wrap'>
        <div>
          <img
            className='pb-10 lg:pr-10'
            src={selectedCountry.flags.png}
            alt=''
          />
        </div>
        <div>
          <h2 className='font-bold text-xl pb-4'>{countryName}</h2>
          <p>
            <strong>Native Name:</strong> {selectedCountry.name.official}
          </p>
          <p>
            <strong>Population:</strong>{' '}
            {formatPopulation(selectedCountry.population)}
          </p>
          <p>
            <strong>Capital:</strong> {selectedCountry.capital}
          </p>
          <p>
            <strong>Region:</strong> {selectedCountry.region}
          </p>
          <p>
            <strong>Sub Region:</strong> {selectedCountry.subregion}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
