import { useState } from 'react';

import { useParams } from 'react-router';

import { Pills } from '@/components/Pills/Pills';

import { fetchProject } from '../../api/fetchProject';

import classes from './Project.module.scss';

export const Project = () => {
  const { id } = useParams<{ id: string }>();
  const [{ title, description, keyPoints, tools }] = useState(() =>
    fetchProject(id)
  );

  return (
    <div className={classes.container} data-testid="project-page">
      <section>
        <h1>{title}</h1>
      </section>
      <section>
        <p className={classes.description}>{description}</p>
      </section>
      <section>
        <ul className={classes.list}>
          {keyPoints.map((keyPoint) => (
            <li key={keyPoint}>
              <p
                className={classes.keyPoint}
                dangerouslySetInnerHTML={{ __html: keyPoint }}
              ></p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Pills pills={tools} />
      </section>
    </div>
  );
};
