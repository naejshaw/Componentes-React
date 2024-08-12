import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import   
 { BrowserRouter } from 'react-router-dom';   
 // Needed for testing Link component
import YoutubeNavitem from './YoutubeNavitem'; // Path to your component

describe('YoutubeNavitem component', () => {
  it('should render the navigation item with title and icon', () => {
    const title = 'Home';
    const navIcon = 'home'; 

    render(
      <BrowserRouter>
        <YoutubeNavitem title={title} navIcon={navIcon} />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    const iconImage = screen.getByAltText(`${navIcon} icon`);
    expect(iconImage).toBeInTheDocument();
  });

  it('should navigate to the correct path when clicked', async () => {
    const title = 'Trending';
    const navIcon = 'trending';
    const expectedPath = `/youtube/${title}`;

    render(
      <BrowserRouter>
        <YoutubeNavitem title={title} navIcon={navIcon} />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole('link');
    await userEvent.click(linkElement);
  });
});