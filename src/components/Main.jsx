function Main() {
  return (
    <main className='min-h-screen bg-sky-950'>
      <form className='flex flex-col gap-y-6 py-6 px-6'>
        <input
          className='bg-sky-900 w-full text-sky-100 placeholder:text-sky-100 py-4 px-6 rounded-md'
          type='search'
          placeholder='Search for a country...'
        />
        <select className=' max-w bg-sky-900 text-sky-100 py-4 px-6'>
          <option selected disabled>
            Filter by Region
          </option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </form>
    </main>
  );
}

export default Main;
