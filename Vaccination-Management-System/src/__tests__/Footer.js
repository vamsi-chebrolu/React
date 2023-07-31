import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';
test('renders vaccination services links', () => {
  const { getByText } = render(<Footer />);
  
  expect(getByText('VACCINTION SERVICES')).toBeInTheDocument();
  expect(getByText('Register Members')).toBeInTheDocument();
  expect(getByText('Search Vaccination Centres')).toBeInTheDocument();
  expect(getByText('Book Vaccination Slots')).toBeInTheDocument();
  expect(getByText('Manage Appointment')).toBeInTheDocument();
  expect(getByText('Download Certificate')).toBeInTheDocument();
});

test('renders platforms links', () => {
  const { getByText } = render(<Footer />);
  
  expect(getByText('PLATFORMS')).toBeInTheDocument();
  expect(getByText('coWin International')).toBeInTheDocument();
  expect(getByText('Vaccinator')).toBeInTheDocument();
  expect(getByText('Department Login')).toBeInTheDocument();
  expect(getByText('Verify Certificates')).toBeInTheDocument();
  expect(getByText('Vaccination Statistics')).toBeInTheDocument();
});

test('renders resources links', () => {
  const { getByText } = render(<Footer />);
  
  expect(getByText('RESOURCES')).toBeInTheDocument();
  expect(getByText('Dos and Dont\'s')).toBeInTheDocument();
  expect(getByText('Overview')).toBeInTheDocument();
  expect(getByText('API Guidelines')).toBeInTheDocument();
  expect(getByText('Open APIs')).toBeInTheDocument();
  expect(getByText('Grievance Guidelines')).toBeInTheDocument();
});

test('renders support links', () => {
  const { getByText } = render(<Footer />);
  
  expect(getByText('SUPPORT')).toBeInTheDocument();
  expect(getByText('Frequently Asked Questions')).toBeInTheDocument();
  expect(getByText('Certificate Corrections')).toBeInTheDocument();
});

test('renders contact information', () => {
  const { getByText } = render(<Footer />);
  
  expect(getByText('CONTACT US')).toBeInTheDocument();
  expect(getByText('Helpline:+91-11-239708046')).toBeInTheDocument();
  expect(getByText('Technical helpline: 0120-4783222')).toBeInTheDocument();
});