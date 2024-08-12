import { render, screen } from '@testing-library/react';
import SkillsContainer from './SkillsContainer'; // Caminho para o seu componente

describe('SkillsContainer component', () => {
  it('should render the children correctly', () => {
    render(
      <SkillsContainer title="História">
        <p>Conteúdo da disciplina</p>
      </SkillsContainer>
    );
    const contentElement = screen.getByText('Conteúdo da disciplina');
    expect(contentElement).toBeInTheDocument();
  });
});