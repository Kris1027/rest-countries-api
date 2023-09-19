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
      <img className='pb-10 lg:pr-10' src={selectedCountry.flags.png} alt='' />
      <h2 className='font-bold text-xl pb-4'>{countryName}</h2>
      <p>
        <strong>Official Name:</strong> {selectedCountry.name.official}
      </p>
      <p>
        <strong>Population:</strong>{' '}
        {formatPopulation(selectedCountry.population)}
      </p>
      <p>
        <strong>Region:</strong> {selectedCountry.region}
      </p>
      <p>
        <strong>Sub Region:</strong> {selectedCountry.subregion}
      </p>
      <p>
        <strong>Capital:</strong> {selectedCountry.capital}
      </p>
      <p>
        <strong>Top Level Domain:</strong> {selectedCountry.tld}
      </p>
      <p>
        <strong>Currencies:</strong>{' '}
        {Object.keys(selectedCountry.currencies).map((currencyCode) => (
          <span key={currencyCode}>
            {selectedCountry.currencies[currencyCode].name}
            {currencyCode !==
            Object.keys(selectedCountry.currencies).slice(-1)[0]
              ? ', '
              : ''}
          </span>
        ))}
      </p>

      <p>
        <strong>Languages:</strong>{' '}
        {Object.keys(selectedCountry.languages).map((languageCode) => (
          <span key={languageCode}>
            {selectedCountry.languages[languageCode]}
            {languageCode !==
            Object.keys(selectedCountry.languages).slice(-1)[0]
              ? ', '
              : ''}
          </span>
        ))}
      </p>
      <p>
        <strong>Borders:</strong>
        {selectedCountry.borders.map((item, index) => (
          <span className='bg-sky-900 mx-2 p-2' key={index}>
            {item}
          </span>
        ))}
      </p>
    </div>
  );
}

export default CountryInfo;
