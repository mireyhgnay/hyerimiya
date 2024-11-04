import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  width: 100%;
  padding: 30px 0;

  @media all and (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const NavItem = styled.li``;

export const NavItemLink = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})`
  font-size: 4.7rem;
  font-weight: 900;
  position: relative;
  color: ${(props) => (props.isActive ? '#000' : '#333')};
  transition: 0.1s;

  &::after {
    content: '';
    position: absolute;
    top: 0px;
    right: -20px;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.textColors.primary};
    display: ${(props) => (props.isActive ? 'block' : 'none')};
  }

  &:hover {
    color: #000;
  }

  @media all and (max-width: 1440px) {
    font-size: 3.7rem;
  }

  @media all and (max-width: 1090px) {
    font-size: 3rem;

    &::after {
      width: 15px;
      height: 15px;
      right: -15px;
    }
  }

  @media all and (max-width: 930px) {
    font-size: 2.3rem;
  }

  @media all and (max-width: 768px) {
    font-size: 1.5rem;

    &::after {
      width: 10px;
      height: 10px;
      right: -10px;
    }
  }

  @media all and (max-width: 450px) {
    font-size: 1rem;

    &::after {
      width: 7px;
      height: 7px;
      right: -7px;
    }
  }
`;
