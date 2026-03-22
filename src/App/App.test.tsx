import { screen } from '@testing-library/react';

import { renderWithRouter } from '@/test/test.utils';

import { mainNavLinks } from '@/routes/links';

import App from './App';

describe('render app layout', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
    screen.debug();
  });

  it('renders the navigation bar when the app loads', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the main page content when the app load', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders all main nav links', () => {
    mainNavLinks.forEach(({ text }) => {
      const navLink = screen.getByRole('link', { name: text });
      expect(navLink).toBeInTheDocument();
    });
  });
});
