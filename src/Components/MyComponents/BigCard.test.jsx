import { render, screen } from '@testing-library/react';
import BigCard from './BigCard'; // Caminho para o seu componente

describe('BigCard component', () => {
  it('should render the children correctly', () => {
    render(
      <BigCard>
        <p>Conteúdo da linha</p>
      </BigCard>
    );
    const contentElement = screen.getByText('Conteúdo da linha');
    expect(contentElement).toBeInTheDocument();
  });
});