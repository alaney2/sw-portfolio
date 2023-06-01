import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 50, 0.8);
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const NavLink = styled.a`
  font-family: 'Star Jedi', sans-serif;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  padding: 0.5rem 1rem;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #00f;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #00f;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
