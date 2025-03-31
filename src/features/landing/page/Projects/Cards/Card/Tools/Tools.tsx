import { Button } from "@/components/Button/Button";

import { ITool } from "@/features/project/api/type";

import classes from "./Tools.module.scss";

interface IToolsProps {
  tools: Array<ITool>;
}

export const Tools = ({ tools }: IToolsProps) => {
  return (
    <div className={classes.tools}>
      {tools
        .map(({ name, Icon }) => (
          <Button size="small">
            <div className={classes.tool}>
              {name}
              {Icon}
            </div>
          </Button>
        ))
        .slice(0, 4)}
      <span>...</span>
    </div>
  );
};
