import { renderWithRouter } from '@/test/test.utils';
import { Navigation } from './Navigation';
import { mainNavLinks } from '@/routes/links';
import { screen } from '@testing-library/react';

describe('navigation component render', () => {
  beforeEach(() => {
    renderWithRouter(<Navigation links={mainNavLinks} />);
  });

  it('render', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
