import { Container, NavList, NavItem, NavItemLink } from './Nav.styles';
import { useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'ABOUT' },
  { path: '/work', label: 'WORK' },
  { path: '/skill', label: 'SKILL' },
  { path: '/contact', label: 'CONTACT' },
];

function Nav() {
  const location = useLocation();

  return (
    <Container>
      <NavList>
        {navItems.map(({ path, label }) => (
          <NavItem key={path}>
            <NavItemLink to={path} isActive={location.pathname === path}>
              {label}
            </NavItemLink>
          </NavItem>
        ))}
      </NavList>
    </Container>
  );
}

export default Nav;
