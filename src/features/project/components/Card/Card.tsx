import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { ROUTES } from '@/routes/routes';

import { Project } from '@/features/project/api/type';

import { Pills } from '@/components/Pills/Pills';

import classes from './Card.module.scss';
import { Link } from '@/components/Link/Link';

export const Card = ({ id, title, description, tools }: Project) => {
  return (
    <article className={classes.card}>
      <h3>{title}</h3>
      <p className={classes.description}>{description}</p>
      <Pills pills={tools} displayCount={4} />
      <Link
        style={{ justifySelf: 'start' }}
        to={ROUTES.projectId.replace(':id', id.toString())}
        className={classes.button}
      >
        <>
          Details
          <FontAwesomeIcon icon={faArrowRight} />
        </>
      </Link>
    </article>
  );
};
