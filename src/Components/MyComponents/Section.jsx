import styled from 'styled-components';
import datas from '../../utils/data.json';

// Styled Section Component
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: ${datas.colors.sectionBackground}; // Consider extracting this from a JSON
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

// Styled Title Component
const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${datas.colors.headerBackground};
  background: ${datas.colors.aboutTexts};
  padding: 0.5rem;
  border-radius: 1rem;
`;

// Optional: Description Component (uncomment if needed)
// const Description = styled.p`
//   font-size: 24px;
//   color: #666;
// `;

// Optional: Button Component (uncomment if needed)
// const Button = styled.button`
//   background-color: #333;
//   color: #fff;
//   border: none;
//   padding: 10px 20px;
//   font-size: 18px;
//   cursor: pointer;
// `;

// Exporting styled components
Section.Title = Title;
// Uncomment if you need to export additional styled components
// Section.Description = Description;
// Section.Button = Button;

export default Section;