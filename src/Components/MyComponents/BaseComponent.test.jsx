import { render, screen } from '@testing-library/react';
import BaseComponent from './BaseComponent'; // Caminho para o seu componente

describe('BaseComponent component', () => {
  it('should render the children correctly', () => {
    render(
      <BaseComponent>
        <p>Conteúdo da linha</p>
      </BaseComponent>
    );
    const contentElement = screen.getByText('Conteúdo da linha');
    expect(contentElement).toBeInTheDocument();
  });
});