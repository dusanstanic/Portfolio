import { useEffect } from "react";

import { useLocation, useNavigate } from "react-router";

import { scrollIntoView } from "@/utils/scroll";

import { Link } from "@/components/Link/Link";

import classes from "./Navigation.module.scss";

export const Navigation = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    scrollIntoView(hash);
  }, [hash]);

  return (
    <div className={classes.container}>
      <nav className={classes.navigation}>
        <ul className={classes.list}>
          <li>
            <Link
              onClick={() => {
                navigate("");
                scrollIntoView("");
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
                navigate({ pathname: "", hash: "projects" });
                scrollIntoView("#projects");
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                navigate({ pathname: "", hash: "aboutMe" });
                scrollIntoView("#aboutMe");
              }}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                // TO DO Take to shared file
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
