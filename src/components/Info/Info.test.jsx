import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';
import Info from './Info';

describe('Info', () => {
  it('renders the title and text', () => {
    const title = 'Important Information';
    const text = 'This is some important information.';
    render(<Info title={title} text={text} />);
    const titleElement = screen.getByText(title);
    const textElement = screen.getByText(text);
    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});