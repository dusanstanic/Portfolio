import { screen } from '@testing-library/react';

import { renderWithRouter } from '@/test/test.utils';

import { mainNavLinks } from '@/routes/links';

import Navigation from './Navigation';

function setMobile(isMobile: boolean) {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: isMobile && query.includes('max-width: 500px'),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

test('Navigation component renders', () => {
  renderWithRouter(<Navigation links={mainNavLinks} />);
});

describe('Navigation component renders', () => {
  beforeEach(() => {
    renderWithRouter(<Navigation links={mainNavLinks} />);
  });

  it('navigation', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('all links', () => {
    mainNavLinks.forEach(({ text }) => {
      const navLink = screen.getByRole('link', { name: text });
      expect(navLink).toBeInTheDocument();
    });
  });
});

describe('burger menu', () => {
  it('in desktop view is not rendered', () => {
    renderWithRouter(<Navigation links={mainNavLinks} />);

    const burgerMenuButton = screen.queryByRole('button', {
      name: 'Open Mobile Navigation Menu',
    });
    expect(burgerMenuButton).not.toBeInTheDocument();
  });

  it('in mobile view is rendered', () => {
    setMobile(true);
    renderWithRouter(<Navigation links={mainNavLinks} />);

    const burgerMenuButton = screen.getByRole('button', {
      name: 'Open Mobile Navigation Menu',
    });
    expect(burgerMenuButton).toBeInTheDocument();
  });
});
