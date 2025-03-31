import { ITool } from "@/features/landing/page/Landing/type";

import classes from "./Tools.module.scss";
import { Button } from "@/features/components/Button/Button";

interface IToolsProps {
  tools: Array<ITool>;
}

export const Tools = ({ tools }: IToolsProps) => {
  return (
    <div className={classes.tools}>
      {tools.map(({ name, Icon }) => (
        <Button size="small">
          <div className={classes.tool}>
            <span>{name}</span>
            {Icon}
          </div>
        </Button>
      ))}
      <span>...</span>
    </div>
  );
};
