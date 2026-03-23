import { ReactElement, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { useFocusTrap } from '@/hooks/useFocusTrap';

import classes from './MobileNavigation.module.scss';

interface Props {
  children: ReactElement;
}

const MobileNavigation = ({ children }: Props) => {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
  const navRef = useFocusTrap({
    isOpen: isMobileNavigationOpen,
    setIsOpen: setIsMobileNavigationOpen,
  });

  return (
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
            {children}
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
  );
};

export default MobileNavigation;
