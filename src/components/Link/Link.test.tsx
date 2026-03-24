import { screen } from '@testing-library/react';

import { renderWithRouter } from '@/test/test.utils';

import { Link } from './Link';

const TEXT = 'Hello';
const PATHNAME = '/home';
const TO = { pathname: PATHNAME };
const EXTERNAL_LINK = 'https://www.site.com';

test('Link component with the right href', () => {
  renderWithRouter(<Link to={TO}>{TEXT}</Link>);

  const link = screen.getByRole('link', { name: TEXT });
  expect(link).toHaveAttribute('href', TO.pathname);
});

test('renders external link with correct attributes', () => {
  renderWithRouter(<Link to={EXTERNAL_LINK}>{TEXT}</Link>);

  const link = screen.getByRole('link', { name: TEXT });
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  expect(link).toHaveAttribute('href', EXTERNAL_LINK);
});

test('Link is rendered with className', () => {
  renderWithRouter(
    <Link to={TO} className="className">
      {TEXT}
    </Link>
  );

  const link = screen.getByRole('link', { name: TEXT });

  expect(link).toHaveClass('className');
});

test('Link is accessible', () => {
  renderWithRouter(
    <Link aria-label="Scroll To Top" to={TO} className="className">
      {TEXT}
    </Link>
  );

  const link = screen.getByRole('link', { name: 'Scroll To Top' });

  expect(link).toBeInTheDocument();
});
