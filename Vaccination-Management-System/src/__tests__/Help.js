import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Help } from '../Help';

// Mock the functions used in the component (optional)
jest.mock('mdb-react-ui-kit', () => ({
  // Mocking the components used from mdb-react-ui-kit
  MDBFooter: jest.fn(({ children }) => <div>{children}</div>),
  MDBContainer: jest.fn(({ children }) => <div>{children}</div>),
  // ... Add other mocked components used in the Help component
}));

describe('Help component', () => {
  it('renders correctly', () => {
    render(<Help />);
    // Test if the header is rendered
    expect(screen.getByRole('heading', { name: /Help and Resources/i })).toBeInTheDocument();
    // Test if the paragraphs are rendered
    expect(screen.getByText(/This section provides additional information and resources/i)).toBeInTheDocument();
    // Test if the accordion elements are rendered
    expect(screen.getByText(/1\.Where can I register for COVID-19 vaccination\?/i)).toBeInTheDocument();
    // ... Add other tests for the rendered elements
  });
});