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
      <div className='flex pt-12 flex-col lg:flex-row flex-wrap'>
        <div>
          <img className='pr-10' src={countryData[0].flags.png} alt='' />
        </div>
        <div>
          <h2 className='font-bold text-xl pb-4'>
            {countryData[0].name.common}
          </h2>
          <p>
            <strong>Native Name:</strong> {countryData[0].name.official}
          </p>
          <p>
            <strong>Population:</strong>{' '}
            {formatPopulation(countryData[0].population)}
          </p>
          <p>
            <strong>Region:</strong> {countryData[0].region}
          </p>
          <p>
            <strong>Sub Region:</strong> {countryData[0].subregion}
          </p>
          <p>
            <strong>Capital:</strong> {countryData[0].capital}
          </p>
          <p>
            <strong>Currencies:</strong>
            {Object.keys(countryData[0].currencies).map((currencyCode) => (
              <span className='mx-2' key={currencyCode}>
                {countryData[0].currencies[currencyCode].name}:{' '}
                {countryData[0].currencies[currencyCode].symbol},
              </span>
            ))}
          </p>
          <p>
            <strong>Languages:</strong>
            {Object.keys(countryData[0].languages).map((languageCode) => (
              <span className='' key={languageCode}>
                {countryData[0].languages[languageCode]}
              </span>
            ))}
          </p>
        </div>
        <div>
          <p className='pt-10'>
            <strong>Border Countries:</strong>
            {Object.keys(countryData[0].borders).map((borderCode) => (
              <span
                className='bg-sky-900 gap-x-2 w-8 mx-4 py-2 px-4 rounded-lg'
                key={borderCode}
              >
                {countryData[0].borders[borderCode]}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
