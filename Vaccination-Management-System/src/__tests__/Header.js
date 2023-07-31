import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers like toBeInTheDocument

import Header from '../Header';

describe('Header', () => {
  test('renders the logo image', () => {
    render(<Header />);
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement.src).toContain('Logo.jpeg.png');
  });

  test('renders home and FAQ links', () => {
    render(<Header />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    const faqLink = screen.getByRole('link', { name: /faq/i });

    expect(homeLink).toBeInTheDocument();
    expect(faqLink).toBeInTheDocument();

    expect(homeLink.href).toBe(`${window.location.origin}/`);
    expect(faqLink.href).toBe(`${window.location.origin}/help`);
  });
});