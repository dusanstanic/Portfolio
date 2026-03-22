import { ITool } from '@/features/project/api/type';

import { Card } from '@/features/tool/components/Card/Card';

import classes from './Main.module.scss';

interface Props {
  tools: Array<ITool>;
}

export const Main = ({ tools }: Props) => {
  return (
    <section className={classes.container}>
      <div>
        <h4 className={classes.heading}>My Stacks</h4>
        <p>
          Commitment to staying updated with the lastest software trends and
          techniques
        </p>
      </div>
      <ul className={classes.tools}>
        {tools.map((tool) => (
          <li key={tool.name}>
            <Card key={tool.name} {...tool} />
          </li>
        ))}
      </ul>
    </section>
  );
};
