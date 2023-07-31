import React from 'react';
import { render } from '@testing-library/react';
import { FooterEnd } from '../FooterEnd';

test('renders the footer text', () => {
  const { getByText } = render(<FooterEnd />);
});

test('renders the company logo', () => {
  const { getByAltText } = render(<FooterEnd />);
  const companyLogo = getByAltText('Company Logo');
  expect(companyLogo).toBeInTheDocument();
});

test('renders the terms of service and privacy policy links', () => {
  const { getByText } = render(<FooterEnd />);
  const termsLink = getByText(/Terms of Service/i);
  const privacyLink = getByText(/Privacy Policy/i);
  expect(termsLink).toBeInTheDocument();
  expect(privacyLink).toBeInTheDocument();
});