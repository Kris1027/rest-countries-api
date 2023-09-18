import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/themeContext';

function Header() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <header
      className={`flex justify-between items-center ${
        isDarkMode ? 'bg-sky-900 text-sky-100' : 'bg-sky-100 text-sky-900'
      }  px-4 py-10 transition-colors duration-200 ease-linear`}
    >
      <Link to='/'>
        <h1 className='font-bold'>Where in the world?</h1>
      </Link>
      <p
        className='font-semibold cursor-pointer active:scale-90 hover:scale-110'
        onClick={toggleDarkMode}
      >
        {isDarkMode ? '🌜 Dark Mode' : '🌞 Light Mode'}
      </p>
    </header>
  );
}

export default Header;
