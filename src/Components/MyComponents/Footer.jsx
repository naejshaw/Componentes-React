import React from 'react';
import styled from 'styled-components';
import datas from '../../utils/data.json'

const FooterDiv = styled.div`
  background-color: ${datas.colors.headerBackground};
  width: 100%;
  margin-bottom: 0;
  position: relative;
  padding: 0.5rem 0.25rem;
  color: white;
  bottom: 0;
`

const Social = styled.ul`
  list-style: none;
  display: flex;
  align-items- center;
  justify-content: space-between;
  padding: 0 auto;
  margin: .5rem auto;
  width:60%;
`

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  
  &:hover{
    color: ${datas.colors.linkHover};
  }
`

const Footer = ({company}) => {
  return (
    <FooterDiv>
      {/* Links para redes sociais, termos de uso, etc. */}
      <Social>
        <li><SocialLink href={datas.socials.facebook}>Facebook</SocialLink></li>
        <li><SocialLink href={datas.socials.instagram}>Instagram</SocialLink></li>
        <li><SocialLink href={datas.socials.whatsapp}>Whatsapp</SocialLink></li>
      </Social>
      <p>&copy; {new Date().getFullYear()} {company}</p>
    </FooterDiv>
  );
};

export default Footer;