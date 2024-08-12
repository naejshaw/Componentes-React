import { render, screen } from '@testing-library/react';
import Subject from './Subject'; // Caminho para o seu componente

const containerClass = 'relative inline-block text-2xl md:text-3xl lg:text-4xl mt-0 mr-0 mb-6 ml-8 title'

describe('Subject component', () => {
  it('should render the title correctly', () => {
    render(<Subject title="Matemática" />);
    const titleElement = screen.getByRole('heading', { name: 'Matemática' });
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the children correctly', () => {
    render(
      <Subject title="História">
        <p>Conteúdo da disciplina</p>
      </Subject>
    );
    const contentElement = screen.getByText('Conteúdo da disciplina');
    expect(contentElement).toBeInTheDocument();
  });

  it('should apply the correct container class', () => {
    render(<Subject title="Ciências" containerClass={containerClass} />);
    const containerElement = screen.getByText('Ciências');
    expect(containerElement).toHaveClass(containerClass);
  });
});