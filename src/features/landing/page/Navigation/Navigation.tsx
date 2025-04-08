import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { scrollIntoView, scrollToTop } from "@/utils/scroll";
import { openInNewTab } from "@/utils/navigation";

import { Link } from "@/components/Link/Link";

import classes from "./Navigation.module.scss";

export const Navigation = () => {
  const navigate = useNavigate();
  const { hash: currentHash, pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!currentHash) return;

    scrollIntoView(currentHash);
  }, [currentHash]);

  const redirect = (hash: string) => {
    if (pathname === "/" && currentHash.replace("#", "") === hash) return;
    navigate({ pathname: "", hash });
  };

  const renderLinks = () => {
    return (
      <>
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
      </>
    );
  };

  return (
    <div className={classes.container}>
      <nav className={classes.navigation}>{renderLinks()}</nav>
      <div
        className={classes.burgerMenu}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <div className={classes.line}></div>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
      </div>
      {isMobileMenuOpen && (
        <>
          <div
            className={classes.backdrop}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <nav className={`${classes.mobileNavigation}`}>{renderLinks()}</nav>
            <div
              className={classes.close}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faXmark} fontSize={"1.8rem"} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
