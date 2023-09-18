import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/themeContext';

function App() {
  return (
    <div className=' max-w-[1440px] mx-auto shadow-xl'>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </div>
  );
}

export default App;
