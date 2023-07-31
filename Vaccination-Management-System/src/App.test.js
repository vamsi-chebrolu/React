import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders home page', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  // Check if the home page is rendered
  const homePageElement = screen.getByText('Welcome to the Home Page');
  expect(homePageElement).toBeInTheDocument();
});

test('renders about us page', () => {
  render(
    <MemoryRouter initialEntries={['/About']}>
      <App />
    </MemoryRouter>
  );

  // Check if the about us page is rendered
  const aboutUsPageElement = screen.getByText('About Us Page');
  expect(aboutUsPageElement).toBeInTheDocument();
});

test('renders dashboard page', () => {
  render(
    <MemoryRouter initialEntries={['/Dashboard']}>
      <App />
    </MemoryRouter>
  );

  // Check if the dashboard page is rendered
  const dashboardPageElement = screen.getByText('Dashboard Page');
  expect(dashboardPageElement).toBeInTheDocument();
});

// Write more test cases to cover other routes as needed.