import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { useGenerateLinks } from './useGenerateLinks';

import classes from './Navigation.module.scss';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useModalNavigation } from '@/hooks/useModalNavigation';

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
  const isMobile = useIsMobile();
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
  const navRef = useModalNavigation({
    isOpen: isMobileNavigationOpen,
    setIsOpen: setIsMobileNavigationOpen,
  });
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
      {!isMobile && <nav className={classes.navigation}>{renderLinks()}</nav>}
      {isMobile && (
        <>
          <button
            className={classes.burgerMenu}
            onClick={() => setIsMobileNavigationOpen((prev) => !prev)}
            aria-label="Open Mobile Navigation Menu"
          >
            <span className={classes.line}></span>
            <span className={classes.line}></span>
            <span className={classes.line}></span>
          </button>
          {isMobileNavigationOpen && (
            <div
              className={classes.backdrop}
              onClick={() => setIsMobileNavigationOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              <nav ref={navRef} className={`${classes.mobileNavigation}`}>
                {renderLinks()}
              </nav>
              <button
                className={classes.close}
                onClick={() => setIsMobileNavigationOpen(false)}
                aria-label="Close Mobile Navigation Menu"
              >
                <FontAwesomeIcon icon={faXmark} fontSize={'1.8rem'} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Navigation;
