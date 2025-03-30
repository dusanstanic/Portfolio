import { ITool } from "@/features/landing/page/Landing/type";

import classes from "./Tools.module.scss";

interface IToolsProps {
  tools: Array<ITool>;
}

export const Tools = ({ tools }: IToolsProps) => {
  return (
    <div className={classes.tools}>
      {tools.map(({ name, Icon }) => (
        <div className={classes.tool}>
          <span>{name}</span>
          {Icon}
        </div>
      ))}
      <span>...</span>
    </div>
  );
};
