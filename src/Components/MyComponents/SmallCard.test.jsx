import { render, screen } from '@testing-library/react';
import SmallCard from './SmallCard'; // Caminho para o seu componente

describe('SmallCard component', () => {
  it('should render the children correctly', () => {
    render(
      <SmallCard>
        <p>Conteúdo da linha</p>
      </SmallCard>
    );
    const contentElement = screen.getByText('Conteúdo da linha');
    expect(contentElement).toBeInTheDocument();
  });
});