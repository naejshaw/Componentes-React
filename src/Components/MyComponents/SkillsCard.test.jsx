import { render, screen } from '@testing-library/react';
import SkillsCard from './SkillsCard'; // Caminho para o seu componente
const text = 'wins'
describe('SkillsCard component', () => {
  it('should render the CardTitle correctly', () => {
    render(<SkillsCard cardTitle="Matemática" />);
    const titleElement = screen.getByText('Matemática');
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the CardText correctly', () => {
    render(<SkillsCard cardText={text} />);
    const textElement = screen.getByText(`${text}%`);
    expect(textElement).toBeInTheDocument();
  });
});