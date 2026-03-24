import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router';

import { ROUTES } from '@/routes/routes';

import { Button } from '@/components/Button/Button';

import { Project } from '@/features/project/api/type';

import { Pills } from '@/components/Pills/Pills';

import classes from './Card.module.scss';

export const Card = ({ id, title, description, tools }: Project) => {
  const navigate = useNavigate();

  return (
    <article className={classes.card}>
      <h3>{title}</h3>
      <p className={classes.description}>{description}</p>
      <Pills pills={tools} displayCount={4} />
      <Button
        style={{ justifySelf: 'start' }}
        onClick={() => navigate(ROUTES.projectId.replace(':id', id.toString()))}
        className={classes.button}
      >
        <>
          <span>Details</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </>
      </Button>
    </article>
  );
};
