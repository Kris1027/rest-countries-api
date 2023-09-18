function Country({ countryData, isDarkMode }) {
  if (!countryData) return <div>Loading...</div>;

  return (
    <div
      className={`${
        isDarkMode ? 'bg-sky-900 text-sky-100' : 'bg-sky-100 text-sky-900'
      } flex flex-col w-96 m-6 rounded-md overflow-hidden duration-200 ease-linear`}
    >
      <img src={countryData.flags.png} alt='flag' />
      <div className='flex flex-col p-10'>
        <h2 className='font-bold text-xl pb-4'>{countryData.name.common}</h2>
        <p>
          <strong>Population:</strong> {countryData.population}
        </p>
        <p>
          <strong>Region:</strong> {countryData.region}
        </p>
        <p>
          <strong>Capital:</strong> {countryData.capital}
        </p>
      </div>
    </div>
  );
}

export default Country;
