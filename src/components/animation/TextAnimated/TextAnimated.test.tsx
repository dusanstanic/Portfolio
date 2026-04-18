import { renderWithRouter } from '@/test/test.utils';

import { TextAnimated } from './TextAnimated';
import { screen } from '@testing-library/react';

const Props = {
  words: ['I', 'am'],
};

describe('TextAnimated component', () => {
  beforeEach(() => {
    renderWithRouter(<TextAnimated {...Props} />);
  });

  it('renders the words passed to it', () => {
    const letterSpans = screen.getAllByText(/./);
    expect(letterSpans[0].textContent).toBe(Props.words[0]);
    expect(letterSpans[1].textContent).toBe(Props.words[1][0]);
    expect(letterSpans[2].textContent).toBe(Props.words[1][1]);
  });
});
