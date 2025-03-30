import { Link } from "@/features/components/Link/Link";

import classes from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <div className={classes.container}>
      <nav className={classes.navigation}>
        <ul className={classes.list}>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#getCV">Get CV</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
