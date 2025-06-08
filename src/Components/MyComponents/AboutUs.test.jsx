import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('AboutUs component', () => {
  test('renders the About Us section with title and bio text', () => {
    render(<AboutUs />);
    const titleElement = screen.getByText(/Sobre Nós/i);
    expect(titleElement).toBeInTheDocument();

    const bioText = screen.getByText(/This is a bio./i);
    expect(bioText).toBeInTheDocument();
  });
});
