import { screen } from '@testing-library/react';

import { renderWithRouter } from '@/test/test.utils';

import { mainNavLinks } from '@/routes/links';

import Navigation from './Navigation';

test('render Navigation component', () => {
  renderWithRouter(<Navigation links={mainNavLinks} />);
});

describe('Navigation component render', () => {
  beforeEach(() => {
    renderWithRouter(<Navigation links={mainNavLinks} />);
  });

  it('renders all links', () => {
    mainNavLinks.forEach(({ text }) => {
      const navLink = screen.getByRole('link', { name: text });
      expect(navLink).toBeInTheDocument();
    });
  });
});
