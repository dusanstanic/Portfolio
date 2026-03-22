import { Project } from '@/features/project/api/type';

import { Card } from '../Card/Card';

import classes from './Cards.module.scss';

interface Props {
  projects: Array<Project>;
}

export const Cards = ({ projects }: Props) => {
  return (
    <ul className={classes.cards}>
      {projects.map((project) => (
        <li key={project.title}>
          <Card {...project} />
        </li>
      ))}
    </ul>
  );
};
