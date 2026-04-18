import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';

import { screen } from '@testing-library/react';

import { renderWithRouter } from '@/test/test.utils';

import { Pills } from './Pills';

const pills = [
  { icon: faWifi, name: 'Wifi' },
  { icon: faAngular, name: 'Angular' },
];

const DISPLAY_COUNT_SMALLER = pills.length - 1;

describe('render pills', () => {
  describe('with no display count', () => {
    beforeEach(() => {
      renderWithRouter(<Pills pills={pills} />);
    });

    it('renders all pills', () => {
      const listItems = screen.getAllByRole('listitem');
      expect(listItems).toHaveLength(pills.length);

      pills.forEach((pill) => {
        expect(screen.getByText(pill.name)).toBeInTheDocument();
      });
    });
  });

  describe('with display count smaller than list length', () => {
    beforeEach(() => {
      renderWithRouter(
        <Pills pills={pills} displayCount={DISPLAY_COUNT_SMALLER} />
      );
    });

    it('renders only pills up to the display count', () => {
      const listItems = screen.getAllByRole('listitem');
      expect(listItems).toHaveLength(DISPLAY_COUNT_SMALLER);
    });

    it('renders trailing commas', () => {
      const trailingCommasText = screen.getByLabelText(
        'More pills exist but not shown'
      );

      expect(trailingCommasText).toBeInTheDocument();
    });
  });

  describe('with display count equal to list length', () => {
    beforeEach(() => {
      renderWithRouter(<Pills pills={pills} displayCount={pills.length} />);
    });

    it('renders all pills', () => {
      const listItems = screen.getAllByRole('listitem');
      expect(listItems).toHaveLength(pills.length);
    });

    it('render no trailing commas', () => {
      const trailingCommasText = screen.queryByLabelText(
        'More pills exist but not shown'
      );
      expect(trailingCommasText).not.toBeInTheDocument();
    });
  });

  describe('with display count 0', () => {
    beforeEach(() => {
      renderWithRouter(<Pills pills={pills} displayCount={0} />);
    });

    it('renders no pills', () => {
      const listItems = screen.queryAllByRole('listitem');
      expect(listItems).toHaveLength(0);
    });

    it('renders no trailing commas', () => {
      const trailingCommasText = screen.queryByLabelText(
        'More pills exist but not shown'
      );

      expect(trailingCommasText).not.toBeInTheDocument();
    });
  });
});
