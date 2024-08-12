import { render, screen } from '@testing-library/react';
import YoutubeRow from './YoutubeRow'; // Caminho para o seu componente

describe('YoutubeRow component', () => {
  it('should render the children correctly', () => {
    render(
      <YoutubeRow>
        <p>Conteúdo da linha</p>
      </YoutubeRow>
    );
    const contentElement = screen.getByText('Conteúdo da linha');
    expect(contentElement).toBeInTheDocument();
  });
});