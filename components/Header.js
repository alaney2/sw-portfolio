import React from 'react';
import { HeaderContainer, Nav, NavLink } from '@/styles/HeaderStyles';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink href="#about">The Force Within</NavLink>
        <NavLink href="#projects">Galactic Projects</NavLink>
        <NavLink href="#skills">Jedi Skills</NavLink>
        <NavLink href="#experience">Rebel Alliance</NavLink>
        <NavLink href="#contact">Contact the Resistance</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
