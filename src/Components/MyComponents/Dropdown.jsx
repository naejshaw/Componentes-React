import React from 'react';
import styled from 'styled-components';
import datas from '../../utils/data.json'

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

export default Dropdown