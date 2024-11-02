import MainBanenr from './components/MainBanner/MainBanner';
import Nav from './components/Nav/Nav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <MainBanenr />
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
