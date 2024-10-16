import React from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components';
import datas from '../../utils/data.json';
import Dropdown from './Dropdown';
import Logo from './Logo';
import Container from './Container';
import Navbar from './Navbar';
import NavLink from './NavLink';

const HeaderContainer = styled.header`
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
  z-index: 1000; // Melhoria: Adicionado z-index para garantir que o cabeçalho fique acima de outros elementos
`;

const Header = ({ company }) => {
    const navLinks = [
        { href: '/template', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <HeaderContainer>
            <Container>
                <Logo src={logo} alt={`${company} logo`} /> {/* Melhoria: alt dinâmico para acessibilidade */}
                <h2>{company}</h2>
            </Container>
            <Container>
                <Navbar>
                    {navLinks.map((link) => (
                        <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
                    ))}
                </Navbar>
                <Dropdown>
                    {navLinks.map((link) => (
                        <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
                    ))}
                </Dropdown>
            </Container>
        </HeaderContainer>
    );
};

export default Header;