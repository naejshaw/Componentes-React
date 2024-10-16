import styled from 'styled-components';
import datas from '../../utils/data.json';

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  transition: color 0.2s ease-in-out; /* Melhoria: Adicionado transição para efeito de hover */
  &:hover {
    color: ${datas.colors.linkHover};
    cursor: pointer;
  }
  &:focus {
    outline: none; /* Melhoria: Removido outline padrão para acessibilidade */
    box-shadow: 0 0 0 2px ${datas.colors.linkFocus}; /* Melhoria: Adicionado sombra para foco */
  }
  &:active {
    color: ${datas.colors.linkActive}; /* Melhoria: Adicionado cor para estado ativo */
  }
`;

export default NavLink;