import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from '@/test/test.utils';

import { Button } from './Button';

const TEXT = 'Click Me';

test('Button component render', () => {
  renderWithRouter(<Button>{TEXT}</Button>);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('Button renders with text', () => {
  renderWithRouter(<Button>{TEXT}</Button>);

  const button = screen.getByRole('button', { name: TEXT });
  expect(button).toBeInTheDocument();
});

test('calls onClick when clicked', async () => {
  const user = userEvent.setup();
  const onClickButton = vi.fn();
  renderWithRouter(<Button onClick={onClickButton}>{TEXT}</Button>);

  const button = screen.getByRole('button', { name: TEXT });
  await user.click(button);

  expect(onClickButton).toHaveBeenCalled();
});

test('Applies custom class name', () => {
  renderWithRouter(<Button className="my-className">{TEXT}</Button>);

  const button = screen.getByRole('button', { name: TEXT });
  expect(button).toHaveClass('my-className');
});

test('Is button right type', () => {
  renderWithRouter(<Button type="submit">{TEXT}</Button>);

  const submitButton = screen.getByRole('button', { name: TEXT });
  expect(submitButton).toHaveAttribute('type', 'submit');
});
