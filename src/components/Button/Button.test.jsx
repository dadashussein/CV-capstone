import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Button from './Button';

describe('Button', () => {
  it('renders the button with icon and text', () => {
    render(<Button icon="🚀" text="Launch" />);
    const button = screen.getByRole('button');
    const icon = screen.getByText('🚀');
    const text = screen.getByText('Launch');
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});