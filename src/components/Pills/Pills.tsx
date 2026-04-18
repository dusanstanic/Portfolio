import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import classes from './Pills.module.scss';
import { useMemo } from 'react';

interface Pill {
  name: string;
  description?: string;
  icon: IconDefinition;
}

interface Props {
  pills: Array<Pill>;
  displayCount?: number;
}

export const Pills = ({ pills, displayCount }: Props) => {
  const shouldDisplayTrailingCommas = useMemo(() => {
    if (displayCount === undefined || displayCount === 0) return;

    return displayCount < pills.length;
  }, [displayCount, pills.length]);

  return (
    <div className={classes.container}>
      <ul className={classes.tools}>
        {pills
          .map(({ name, icon }) => (
            <li key={name} className={classes.tool}>
              {name}
              <FontAwesomeIcon icon={icon} aria-hidden="true" />
            </li>
          ))
          .slice(0, displayCount ?? pills.length)}
      </ul>
      {shouldDisplayTrailingCommas && (
        <p aria-label="More pills exist but not shown">...</p>
      )}
    </div>
  );
};
