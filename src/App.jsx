import MainBanenr from './components/MainBanner/MainBanner';
import Nav from './components/Nav/Nav';
import { Outlet, useLocation } from 'react-router-dom';
import theme from './styles/theme';
import styled from 'styled-components';

const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'backgroundColor',
})`
  background-color: ${(props) => props.backgroundColor};
`;

function App() {
  const location = useLocation();
  const backgroundColor =
    location.pathname === '/contact' || location.pathname === '/work'
      ? theme.backgroundColors.primary
      : '#fff';

  return (
    <Wrapper backgroundColor={backgroundColor}>
      <MainBanenr />
      <Nav />
      <Outlet />
    </Wrapper>
  );
}

export default App;
