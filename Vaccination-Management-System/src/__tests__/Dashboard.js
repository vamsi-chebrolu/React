// Import necessary dependencies for testing
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dashboard } from '../Dashboard';

// Mock the useNavigate function from 'react-router-dom'
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

test('Dashboard component renders correctly', () => {
  render(<Dashboard />);

  // Test header rendering
  expect(screen.getByText('Header')).toBeInTheDocument();

  // Test card data rendering
  const cardTitles = screen.getAllByText(/^(AREGISTRATIONS|1VACCINATIONS|AVAILABILITY|a1Network in cities)$/);
  expect(cardTitles).toHaveLength(4);

  const cardContents = screen.getAllByText(/^(\d+)$/);
  expect(cardContents).toHaveLength(4);

  const cardLogos = screen.getAllByAltText('Card Logo');
  expect(cardLogos).toHaveLength(4);

  // Test button rendering and click event
  const profileButton = screen.getByRole('button', { name: 'Profile' });
  const bookSlotButton = screen.getByRole('button', { name: 'Book slot' });
  const updateSlotButton = screen.getByRole('button', { name: 'Update slot' });
  const downloadCertificateButton = screen.getByRole('button', { name: 'Download Certificate' });

  expect(profileButton).toBeInTheDocument();
  expect(bookSlotButton).toBeInTheDocument();
  expect(updateSlotButton).toBeInTheDocument();
  expect(downloadCertificateButton).toBeInTheDocument();

  // Test footer and footer end rendering
  expect(screen.getByText('Footer')).toBeInTheDocument();
  expect(screen.getByText('FooterEnd')).toBeInTheDocument();
});

// Add more test cases as needed