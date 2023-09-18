import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className=' max-w-[1440px] mx-auto shadow-xl'>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Main isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
