import styled from 'styled-components';

const Navbar = styled.nav`
  display: none; /* Mobile-first: Display flex by default */
  padding: 1rem; /* Add padding for better spacing */
  gap: 1rem; /* Space between items */

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row; /* Switch to horizontal layout on larger screens */
    justify-content: space-between; /* Space items evenly */
    align-items: center; /* Center items vertically */
  }
`;

export default Navbar;