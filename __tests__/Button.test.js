import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../src/components/Button/index';

describe('Button Component', () => {
  test('renders with the correct label', () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
