import React from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components';
import datas from '../../utils/data.json'

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;

`

const AppHeader = styled.div`
  background-color: ${datas.colors.headerBackground};
  width: 100%;
  margin: 0;
  top: 0;
  padding: 0.25rem;
  color: white;
  display: flex;
  justify-content: space-between;
  position: fixed;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  display: none;
  padding-right: 1rem;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: white;
  &:hover{
    color: ${datas.colors.linkHover};
    cursor: pointer;
  }
`

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const DropdownButton = styled.button`
  background-color: ${datas.colors.sectionBackground};
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${datas.colors.headerBackground};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  & a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  ${DropdownContainer}:hover & {
    display: block;
    right: 0;
  }
`;
const Dropdown = ({children}) => {
  return (
    <DropdownContainer>
      <DropdownButton>
        Menu
      </DropdownButton>
      <DropdownContent>
        {children}
      </DropdownContent>
    </DropdownContainer>
  );
};

const Header = ({company}) => {
    return (
        <AppHeader className="App-header">
          <Container>
            <Logo src={logo} alt="logo" />
            <h2>{company}</h2>
          </Container>
          <Container>
            <List>
              <Link href='/'>Home</Link>
              <Link href='#about'>About</Link>
              <Link href='#services'>Services</Link>
              <Link href='#testimonials'>Testimonials</Link>
              <Link href='#contact'>Contact</Link>
            </List>
            <Dropdown>
              <Link href='/'>Home</Link>
              <Link href='#about'>About</Link>
              <Link href='#services'>Services</Link>
              <Link href='#testimonials'>Testimonials</Link>
              <Link href='#contact'>Contact</Link>
            </Dropdown>
          </Container>
        </AppHeader>
    );
}

export default Header;
