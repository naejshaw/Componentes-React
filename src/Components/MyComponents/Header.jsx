import React from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components';
import datas from '../../utils/data.json'
import Dropdown from './Dropdown';
import Logo from './Logo';
import Container from './Container';
import Navbar from './Navbar';
import NavLink from './NavLink';

const HeaderContainer = styled.div`
  background-color: ${datas.colors.headerBackground};
  width: 100%;
  height: 5rem;
  margin: 0;
  top: 0;
  padding: 0.25rem;
  color: white;
  display: flex;
  justify-content: space-between;
  position: fixed;
  align-items: center;
`

const Header = ({company}) => {
    return (
        <HeaderContainer>
          <Container>
            <Logo src={logo} alt="logo" />
            <h2>{company}</h2>
          </Container>
          <Container>
            <Navbar>
              <NavLink href='/template'>Home</NavLink>
              <NavLink href='#about'>About</NavLink>
              <NavLink href='#services'>Services</NavLink>
              <NavLink href='#testimonials'>Testimonials</NavLink>
              <NavLink href='#contact'>Contact</NavLink>
            </Navbar>
            <Dropdown>
              <NavLink href='/template'>Home</NavLink>
              <NavLink href='#about'>About</NavLink>
              <NavLink href='#services'>Services</NavLink>
              <NavLink href='#testimonials'>Testimonials</NavLink>
              <NavLink href='#contact'>Contact</NavLink>
            </Dropdown>
          </Container>
        </HeaderContainer>
    );
}

export default Header;
