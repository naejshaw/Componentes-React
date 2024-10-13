import React from 'react';
import styled from 'styled-components';
import datas from '../../utils/data.json'
import Social from './Social';

const FooterDiv = styled.div`
  background-color: ${datas.colors.headerBackground};
  width: 100%;
  margin-bottom: 0;
  position: relative;
  padding: 0.5rem 0.25rem;
  color: white;
  bottom: 0;
`

const Footer = ({company}) => {
  return (
    <FooterDiv>
      {/* Links para redes sociais, termos de uso, etc. */}
      <Social />
      <p>&copy; {new Date().getFullYear()} {company}</p>
    </FooterDiv>
  );
};

export default Footer;