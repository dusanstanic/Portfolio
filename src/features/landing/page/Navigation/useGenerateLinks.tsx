import { ReactElement, useMemo } from 'react';

import { Link } from '@/components/Link/Link';

import { scrollToTop } from '@/utils/scroll';

import { NavigationLinkProps } from './Navigation';

interface Params {
  links: Array<NavigationLinkProps>;
}

export const useGenerateLinks = ({ links }: Params) => {
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

  const { leftSideLinks, rightSideLinks } = useMemo(() => {
    const leftSideLinks: Array<ReactElement> = [];
    const rightSideLinks: Array<ReactElement> = [];

    links.map((props) => {
      if (!props.config?.position || props.config.position === 'left') {
        leftSideLinks.push(renderListItem(props));
      } else {
        rightSideLinks.push(renderListItem(props));
      }
    });

    return { leftSideLinks, rightSideLinks };
  }, [links]);

  return { leftSideLinks, rightSideLinks };
};
