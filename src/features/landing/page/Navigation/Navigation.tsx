import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { scrollToTop } from "@/utils/scroll";

import { Link } from "@/components/Link/Link";

import classes from "./Navigation.module.scss";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderLinks = () => {
    return (
      <>
        <ul className={classes.list}>
          <li>
            <Link to={""} onClick={scrollToTop}>
              Home
            </Link>
          </li>
        </ul>
        <ul className={classes.list}>
          <li>
            <Link to={{ pathname: "/", hash: "#projects" }}>Projects</Link>
          </li>
          <li>
            <Link to={{ pathname: "/", hash: "#aboutMe" }}>About Me</Link>
          </li>
          <li>
            <Link to="https://drive.google.com/file/d/1HqES7eytNpRSufEqT7f-9JOGAZByCVj8/view?usp=sharing">
              Get CV
            </Link>
          </li>
        </ul>
      </>
    );
  };

  const mobileBurgerButton = (
    <button
      className={classes.burgerMenu}
      onClick={() => setIsMobileMenuOpen((prev) => !prev)}
    >
      <span className={classes.line}></span>
      <span className={classes.line}></span>
      <span className={classes.line}></span>
    </button>
  );

  const mobileMenu = (
    <div
      className={classes.backdrop}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <nav className={`${classes.mobileNavigation}`}>{renderLinks()}</nav>
      <button
        className={classes.close}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <FontAwesomeIcon icon={faXmark} fontSize={"1.8rem"} />
      </button>
    </div>
  );

  return (
    <div className={classes.container}>
      <nav className={classes.navigation}>{renderLinks()}</nav>
      {mobileBurgerButton}
      {isMobileMenuOpen && mobileMenu}
    </div>
  );
};
