import { render, screen } from '@testing-library/react';
import App from './App';

describe('Rendering App', () => {
  it('should render', () => {
    render(<App />);

    expect(screen.getByText(/test/)).toBeTruthy();
  });
});
