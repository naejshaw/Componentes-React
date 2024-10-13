import styled from 'styled-components';

const Navbar = styled.ul`
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

export default Navbar