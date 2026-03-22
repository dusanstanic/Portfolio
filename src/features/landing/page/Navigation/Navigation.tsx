import { ReactElement, useMemo, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { scrollToTop } from '@/utils/scroll';

import { Link } from '@/components/Link/Link';

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

export const Navigation = ({ links }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderListItem = ({ text, config, ...props }: NavigationLinkProps) => {
    return (
      <li key={text}>
        <Link
          to={props.externalLink ? props.externalLink : props}
          onClick={config?.scrollToTop ? scrollToTop : undefined}
        >
          {text}
        </Link>
      </li>
    );
  };

  const { leftLinks, rightLinks } = useMemo(() => {
    const leftLinks: Array<ReactElement> = [];
    const rightLinks: Array<ReactElement> = [];

    links.map((props) => {
      if (!props.config?.position || props.config.position === 'left') {
        leftLinks.push(renderListItem(props));
      } else {
        rightLinks.push(renderListItem(props));
      }
    });

    return { rightLinks, leftLinks };
  }, [links]);

  const renderLinks = () => {
    return (
      <ul className={classes.list}>
        <div className={classes.left}>
          {leftLinks.map((linkElement) => linkElement)}
        </div>
        <div className={classes.right}>
          {rightLinks.map((linkElement) => linkElement)}
        </div>
        {}
      </ul>
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
        <FontAwesomeIcon icon={faXmark} fontSize={'1.8rem'} />
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
