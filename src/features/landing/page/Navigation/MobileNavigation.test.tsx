import { screen } from '@testing-library/react';

import { userEvent } from '@testing-library/user-event';

import { renderWithRouter } from '@/test/test.utils';

import { mainNavLinks } from '@/routes/links';

import MobileNavigation from './MobileNavigation';

const renderMobileNavigation = () => {
  return renderWithRouter(
    <MobileNavigation>
      <ul>
        {mainNavLinks.map(({ text, pathname, hash, externalLink }) => (
          <li key={text}>
            <a href={pathname || hash || externalLink}>{text}</a>
          </li>
        ))}
      </ul>
    </MobileNavigation>
  );
};

test('MobileNavigation component renders', () => {
  renderMobileNavigation();
});

describe('clicking burger menu to open mobile menu navigation', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(async () => {
    renderMobileNavigation();

    user = userEvent.setup();
    const burgerMenuButton = screen.getByRole('button', {
      name: 'Open Mobile Navigation Menu',
    });

    await user.click(burgerMenuButton);
  });

  it('renders all links', async () => {
    mainNavLinks.forEach(({ text }) => {
      const mainNavigationLink = screen.getByRole('link', { name: text });
      expect(mainNavigationLink).toBeInTheDocument();
    });
  });

  it('renders close button', async () => {
    const closeMobileMenuButton = screen.getByRole('button', {
      name: 'Close Mobile Navigation Menu',
    });

    expect(closeMobileMenuButton).toBeInTheDocument();
  });

  it('after clicking close button navigation is not visible', async () => {
    const closeMobileMenuButton = screen.getByRole('button', {
      name: 'Close Mobile Navigation Menu',
    });
    await user.click(closeMobileMenuButton);

    const navigationMenu = screen.queryByRole('navigation');
    expect(navigationMenu).not.toBeInTheDocument();
  });

  it('focuses on first link element', () => {
    const firstLink = screen.getByRole('link', { name: mainNavLinks[0].text });
    expect(firstLink).toHaveFocus();
  });

  it('traps focus when tabbing forward', async () => {
    const firstLink = screen.getByRole('link', { name: mainNavLinks[0].text });
    const lastLink = screen.getByRole('link', {
      name: mainNavLinks[mainNavLinks.length - 1].text,
    });

    lastLink.focus();
    await user.tab();

    expect(firstLink).toHaveFocus();
  });

  it('traps focus when going backwards', async () => {
    const firstLink = screen.getByRole('link', { name: mainNavLinks[0].text });
    const lastLink = screen.getByRole('link', {
      name: mainNavLinks[mainNavLinks.length - 1].text,
    });

    firstLink.focus();
    await user.tab({ shift: true });

    expect(lastLink).toHaveFocus();
  });

  it('allows keyboard menu navigation through burger menu links', async () => {
    const linkElements = mainNavLinks.map(({ text }) => {
      return screen.getByRole('link', { name: text });
    });

    for (const link of linkElements) {
      expect(link).toHaveFocus();
      await user.tab();
    }
  });

  it('close modal when clicking escape button on keyboard', async () => {
    await user.keyboard('{Escape}');

    const closeMobileMenuButton = screen.queryByRole('button', {
      name: 'Close Mobile Navigation Menu',
    });

    expect(closeMobileMenuButton).not.toBeInTheDocument();
  });
});
