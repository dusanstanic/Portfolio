import { Link } from "@/components/Link/Link";

import classes from "./Navigation.module.scss";
import { useNavigate } from "react-router";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <nav className={classes.navigation}>
        <ul className={classes.list}>
          <li>
            <Link
              onClick={() => {
                navigate("");
              }}
            >
              Home
            </Link>
          </li>
        </ul>
        <ul className={classes.list}>
          <li>
            <Link
              onClick={() => {
                navigate("/#projects");
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                navigate("/#aboutMe");
              }}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                navigate("/#getCV");
              }}
            >
              Get CV
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
