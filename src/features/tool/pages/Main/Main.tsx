import { ITool } from "@/features/project/api/type";

import { Card } from "@/features/tool/components/Card/Card";

import classes from "./Main.module.scss";

interface IMainProps {
  tools: Array<ITool>;
}

export const Main = ({ tools }: IMainProps) => {
  return (
    <div className={classes.container}>
      <div>
        <h4 className={classes.heading}>My Stacks</h4>
        <p>
          Commitment to staying updated with the lastest software trends and
          techniques
        </p>
      </div>
      <div className={classes.tools}>
        {tools.map((tool) => (
          <Card {...tool} />
        ))}
      </div>
    </div>
  );
};
