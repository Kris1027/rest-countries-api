import { Link, useParams } from 'react-router-dom';
import { useData } from './contexts/dataContext';

function CountryInfo() {
  const { countryData } = useData();
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
    <div className='bg-sky-950 text-sky-100 h-screen p-12'>
      <Link to='/'>
        <button className='py-3 px-10 bg-sky-900 rounded-lg active:scale-90 hover:scale-110'>
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
