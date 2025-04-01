import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "@/components/Button/Button";

import { ITool } from "@/features/project/api/type";

import classes from "./Pills.module.scss";

interface IPillsProps {
  pills: Array<ITool>;
}

export const Pills = ({ pills }: IPillsProps) => {
  return (
    <div className={classes.tools}>
      {pills
        .map(({ name, icon }) => (
          <Button size="small" style={{ cursor: "auto" }}>
            <div className={classes.tool}>
              {name}
              <FontAwesomeIcon icon={icon} />
            </div>
          </Button>
        ))
        .slice(0, 4)}
      <span>...</span>
    </div>
  );
};
