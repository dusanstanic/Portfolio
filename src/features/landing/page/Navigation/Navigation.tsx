import { Link } from "@/features/components/Link/Link";

import classes from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <div className={classes.container}>
      <nav className={classes.navigation}>
        <ul className={classes.list}>
          <li>
            <Link>Project</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Get CV</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
