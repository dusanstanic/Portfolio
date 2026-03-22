import { screen } from '@testing-library/react';

import { renderWithRouter } from '@/test/test.utils';

import { mainNavLinks } from '@/routes/links';

import App from './App';

test('render App component', () => {
  renderWithRouter(<App />);
});

describe('render App main sections', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  it('renders the navigation when the app loads', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the main content when the app loads', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders all main nav links when the app loads', () => {
    mainNavLinks.forEach(({ text }) => {
      const navLink = screen.getByRole('link', { name: text });
      expect(navLink).toBeInTheDocument();
    });
  });
});
