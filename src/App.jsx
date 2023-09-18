import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/themeContext';
import { DataProvider } from './contexts/dataContext';

function App() {
  return (
    <div className=' max-w-[1440px] mx-auto shadow-xl'>
      <ThemeProvider>
        <DataProvider>
          <Header />
          <Outlet />
        </DataProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
