import styled from 'styled-components';
import datas from '../../utils/data.json'

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  &:hover{
    color: ${datas.colors.linkHover};
    cursor: pointer;
  }
`

export default NavLink