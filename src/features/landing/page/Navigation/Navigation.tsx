import { useEffect } from "react";

import { useLocation, useNavigate } from "react-router";

import { scrollIntoView, scrollToTop } from "@/utils/scroll";
import { openInNewTab } from "@/utils/navigation";

import { Link } from "@/components/Link/Link";

import classes from "./Navigation.module.scss";

export const Navigation = () => {
  const navigate = useNavigate();
  const { hash: currentHash, pathname } = useLocation();

  useEffect(() => {
    if (!currentHash) return;

    scrollIntoView(currentHash);
  }, [currentHash]);

  const redirect = (hash: string) => {
    if (pathname === "/" && currentHash.replace("#", "") === hash) return;
    navigate({ pathname: "", hash });
  };

  return (
    <div className={classes.container}>
      <nav className={classes.navigation}>
        <ul className={classes.list}>
          <li>
            <Link
              onClick={() => {
                redirect("");
                scrollToTop();
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
                redirect("projects");
                scrollIntoView("#projects");
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                redirect("aboutMe");
                scrollIntoView("#aboutMe");
              }}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                openInNewTab(
                  "https://drive.google.com/file/d/1UGKUgZ0kn-g-G_uGh6C3vPNkQQpjEw8_/view?usp=drive_link"
                );
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
