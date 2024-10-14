import React from 'react';
import styled from 'styled-components';
import datas from '../../utils/data.json'
import Social from './Social';
import { Link } from 'react-router-dom';

const FooterDiv = styled.div`
  background-color: ${datas.colors.headerBackground};
  width: 100%;
  margin-bottom: 0;
  position: relative;
  padding: 0.75rem 0.25rem;
  color: white;
  bottom: 0;
  display: flex;
`

const Footer = ({company}) => {
  return (
    <FooterDiv>
      {/* Links para redes sociais, termos de uso, etc. */}
      <div className="w-11/12 flex flex-col gap-3">
        <Social />
        <p>&copy; {new Date().getFullYear()} {company}</p>
      </div>
      <div className="relative footer-iconTop">
          <Link
              className="relative inline-flex justify-center items-center p-3 bg-[#00abf0] border-[.2rem] border-solid border-[#00abf0] rounded-lg z-10 overflow-hidden"
              to={'#header'}
              onClick = {(e)=>{
                  e.preventDefault();
                  window.scrollTo({
                  top: 0,
                  behavior: "smooth",
               });}}
          >
              <i className="fa fa-arrow-up"></i>
          </Link>
          <span className="animate scroll" />
      </div>
    </FooterDiv>
  );
};

export default Footer;