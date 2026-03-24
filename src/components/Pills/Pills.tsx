import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ITool } from '@/features/project/api/type';

import classes from './Pills.module.scss';

interface Props {
  pills: Array<ITool>;
  displayCount?: number;
}

export const Pills = ({ pills, displayCount }: Props) => {
  return (
    <ul className={classes.tools}>
      {pills
        .map(({ name, icon }) => (
          <li key={name} className={classes.tool}>
            <>
              {name}
              <FontAwesomeIcon icon={icon} />
            </>
          </li>
        ))
        .slice(0, displayCount ? displayCount : pills.length)}
      {displayCount && <span>...</span>}
    </ul>
  );
};
