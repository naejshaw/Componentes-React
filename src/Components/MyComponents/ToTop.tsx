import { Link } from "react-router-dom";
import styled from "styled-components";

const ScrollToTopButton = styled(Link)`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  background-color: var(--primary); /* Use CSS variables for better theming */
  border: 0.2rem solid var(--primary);
  border-radius: 0.5rem;
  z-index: 10;
  overflow: hidden;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-hover); /* Optional hover effect */
  }
`;

const ToTop = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollToTopButton to="#header" onClick={handleScrollToTop} aria-label="Scroll to top">
      <i className="fa fa-arrow-up" aria-hidden="true"></i>
    </ScrollToTopButton>
  );
};

export default ToTop;