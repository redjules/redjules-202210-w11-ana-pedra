import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react form words', () => {
    render(<App />);
    const element = screen.getByText(/react form/i);
    expect(element).toBeInTheDocument();
});
