import { fireEvent, screen } from '@testing-library/react';

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

test('render Navigation component', () => {
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
  describe('in desktop view', () => {
    beforeEach(() => {
      renderWithRouter(<Navigation links={mainNavLinks} />);
    });

    it('is not rendered', () => {
      const burgerMenuButton = screen.queryByRole('button', {
        name: 'Open Mobile Navigation Menu',
      });
      expect(burgerMenuButton).not.toBeInTheDocument();
    });
  });

  describe('in mobile view', () => {
    beforeEach(() => {
      setMobile(true);
      renderWithRouter(<Navigation links={mainNavLinks} />);
    });

    it('is rendered', () => {
      const burgerMenuButton = screen.getByRole('button', {
        name: 'Open Mobile Navigation Menu',
      });
      expect(burgerMenuButton).toBeInTheDocument();
    });

    it('opens navigation menu and render all links', () => {
      const burgerMenuButton = screen.getByRole('button', {
        name: 'Open Mobile Navigation Menu',
      });

      fireEvent.click(burgerMenuButton);

      mainNavLinks.forEach(({ text }) => {
        const mainNavigationLink = screen.getByRole('link', { name: text });
        expect(mainNavigationLink).toBeInTheDocument();
      });
    });

    it('renders close navigation menu button', () => {
      const burgerMenuButton = screen.getByRole('button', {
        name: 'Open Mobile Navigation Menu',
      });

      fireEvent.click(burgerMenuButton);

      const closeMobileMenuButton = screen.getByRole('button', {
        name: 'Close Mobile Navigation Menu',
      });

      expect(closeMobileMenuButton).toBeInTheDocument();
    });

    it('after clicking close menu navigation menu is not visible', () => {
      const burgerMenuButton = screen.getByRole('button', {
        name: 'Open Mobile Navigation Menu',
      });
      fireEvent.click(burgerMenuButton);
      const closeMobileMenuButton = screen.getByRole('button', {
        name: 'Close Mobile Navigation Menu',
      });
      fireEvent.click(closeMobileMenuButton);
      const navigationMenu = screen.queryByRole('navigation');
      expect(navigationMenu).not.toBeInTheDocument();

      screen.debug();
    });
  });
});
