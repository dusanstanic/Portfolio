import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ITool } from '@/features/project/api/type';

import classes from './Card.module.scss';

export const Card = ({ icon, name }: ITool) => {
  return (
    <article className={classes.card}>
      <FontAwesomeIcon icon={icon} fontSize={'1.4rem'} fontWeight={100} />
      <p className={classes.name}>{name}</p>
    </article>
  );
};
