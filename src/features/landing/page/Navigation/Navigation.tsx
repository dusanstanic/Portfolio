import { useGenerateLinks } from './useGenerateLinks';

import classes from './Navigation.module.scss';
import { useIsMobile } from '@/hooks/useIsMobile';
import MobileNavigation from './MobileNavigation';

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

  const { leftSideLinks, rightSideLinks } = useGenerateLinks({ links });

  const renderLinks = () => {
    return (
      <div className={classes.list}>
        <ul className={classes.left}>{leftSideLinks}</ul>
        <ul className={classes.right}>{rightSideLinks}</ul>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      {!isMobile && <nav className={classes.navigation}>{renderLinks()}</nav>}
      {isMobile && <MobileNavigation>{renderLinks()}</MobileNavigation>}
    </div>
  );
};

export default Navigation;
