import { Project } from '@/features/project/api/type';

import { Card } from '../Card/Card';

import classes from './Cards.module.scss';

interface Props {
  projects: Array<Project>;
}

export const Cards = ({ projects }: Props) => {
  return (
    <section className={classes.cards}>
      {projects.map((project) => (
        <Card {...project} key={project.title} />
      ))}
    </section>
  );
};
