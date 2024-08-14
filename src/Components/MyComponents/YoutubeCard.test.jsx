import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import YoutubeCard from './YoutubeCard'; // Path to your component

//Teste unitário YoutubeCard component
describe('YoutubeCard component', () => {
//Teste de renderização do YoutubeCard component com as props indicadas
  it('should render the YoutubeCard item with title, transmission, views and avatar', () => {
    const title = 'Home';
    const avatar = 'profile'; 
    const thumb = 'thumb';
    const transmission = 'Teste1';
    const views = 'Teste2';

    render(
      <BrowserRouter>
        <YoutubeCard title={title} avatar={avatar} thumb={thumb} transmission={transmission} views={views}/>
      </BrowserRouter>
    );

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    
    const transmissionElement = screen.getByTitle('infos');
    expect(transmissionElement).toContainHTML(transmission);

    const viewsElement = screen.getByTitle('infos');
    expect(viewsElement).toContainHTML(views);

    const avatarImage = screen.getByAltText(`${avatar} avatar`);
    expect(avatarImage).toBeInTheDocument();

    const thumbImage = screen.getByAltText(`${thumb} thumb`);
    expect(thumbImage).toBeInTheDocument();
  });
//Teste de rota de navegação
  it('should navigate to the correct path when clicked', async () => {
    const title = 'Trending';
    const avatar = 'trending';
    const id =  Math.random().toString(36).slice(2);
    const expectedPath = `/youtube/watch?v=${id}`;

    render(
      <BrowserRouter>
        <YoutubeCard title={title} avatar={avatar} />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole('link');
    await userEvent.click(linkElement);
  });
});