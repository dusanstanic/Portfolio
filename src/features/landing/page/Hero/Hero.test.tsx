import { renderWithRouter } from '@/test/test.utils';
import { Hero } from './Hero';
import { screen } from '@testing-library/react';

const HeroProps = {
  title: ['Software', 'Engineer'],
  text: 'Text',
  email: 'email@hotmail.com',
  socialLinks: { linkedInUrl: 'url' },
};

describe('Hero component', () => {
  beforeEach(() => {
    renderWithRouter(<Hero {...HeroProps} />);
  });

  it('renders container', () => {
    const region = screen.getByRole('region');
    expect(region).toBeInTheDocument();
  });

  it('renders with the title displayed', () => {
    const title = screen.getByRole('heading', {
      level: 1,
    });
    expect(title).toBeInTheDocument();
  });

  it('renders with an image displayed', () => {
    const image = screen.getByAltText('Image of user');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining('DusanStanic.jpg')
    );
  });

  it('render with a fig caption', () => {
    const figCaption = screen.getByText('User profile photo');
    expect(figCaption).toBeInTheDocument();
  });
});
