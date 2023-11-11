import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PhotoBox from './PhotoBox';


describe('PhotoBox', () => {
  it('renders the name, title, and description', () => {
    const name = 'John Doe';
    const title = 'Software Engineer';
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    render(<PhotoBox name={name} title={title} description={description} />);
    const nameElement = screen.getByText(name);
    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);
    expect(nameElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});