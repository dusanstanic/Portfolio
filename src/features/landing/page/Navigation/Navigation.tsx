import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { useGenerateLinks } from './useGenerateLinks';

import classes from './Navigation.module.scss';

type LinkPosition = 'left' | 'right';

export interface NavigationLinkProps {
  pathname?: string;
  hash?: string;
  externalLink?: string;
  text: string;
  config?: {
    position: LinkPosition;
    scrollToTop?: boolean;
  };
}

interface Props {
  links: Array<NavigationLinkProps>;
}

const Navigation = ({ links }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { leftSideLinks, rightSideLinks } = useGenerateLinks({ links });

  const renderLinks = () => {
    return (
      <ul className={classes.list}>
        <div className={classes.left}>{leftSideLinks}</div>
        <div className={classes.right}>{rightSideLinks}</div>
      </ul>
    );
  };

  return (
    <div className={classes.container}>
      <nav className={classes.navigation}>{renderLinks()}</nav>
      <button
        className={classes.burgerMenu}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <span className={classes.line}></span>
        <span className={classes.line}></span>
        <span className={classes.line}></span>
      </button>
      {isMobileMenuOpen && (
        <div
          className={classes.backdrop}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <nav className={`${classes.mobileNavigation}`}>{renderLinks()}</nav>
          <button
            className={classes.close}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} fontSize={'1.8rem'} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
