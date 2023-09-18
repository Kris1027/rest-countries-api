import { Link } from 'react-router-dom';
import { useData } from './contexts/dataContext';

function CountryInfo() {
  const { countryData } = useData();

  if (!countryData) return <div>Loading...</div>;
  console.log(countryData[0]);

  function formatPopulation(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return (
    <div className='bg-sky-950 text-sky-100 h-screen p-12'>
      <Link to='/'>
        <button className='py-3 px-10 bg-sky-900 rounded-lg active:scale-90 hover:scale-110'>
          Back
        </button>
      </Link>
      <div>
        <div>
          <img src={countryData[0].flags.png} alt='' />
        </div>
        <div>
          <h2>{countryData[0].name.common}</h2>
          <p>Native Name: {countryData[0].name.official}</p>
          <p>Population: {formatPopulation(countryData[0].population)}</p>
          <p>Region: {countryData[0].region}</p>
          <p>Sub Region: {countryData[0].subregion}</p>
          <p>Capital: {countryData[0].capital}</p>
          <p>
            Currencies:
            {Object.keys(countryData[0].currencies).map((currencyCode) => (
              <span key={currencyCode}>
                {countryData[0].currencies[currencyCode].name} (
                {countryData[0].currencies[currencyCode].symbol} )
              </span>
            ))}
          </p>
          <p>
            Languages:
            {Object.keys(countryData[0].languages).map((languageCode) => (
              <span key={languageCode}>
                {countryData[0].languages[languageCode]}
              </span>
            ))}
          </p>
        </div>
        <div>
          <p>
            Border Countries:
            {Object.keys(countryData[0].borders).map((borderCode) => (
              <span key={borderCode}>{countryData[0].borders[borderCode]}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
