import { NavigationLinkProps } from '@/features/landing/page/Navigation/Navigation';

export const mainNavLinks: Array<NavigationLinkProps> = [
  {
    pathname: '',
    text: 'Home',
    config: {
      position: 'left',
      scrollToTop: true,
    },
  },
  {
    pathname: '',
    hash: '#projects',
    text: 'Projects',
    config: {
      position: 'right',
    },
  },
  {
    pathname: '',
    hash: '#aboutMe',
    text: 'About Me',
    config: {
      position: 'right',
    },
  },
  {
    externalLink:
      'https://drive.google.com/file/d/1HqES7eytNpRSufEqT7f-9JOGAZByCVj8/view?usp=sharing',
    text: 'Get CV',
    config: {
      position: 'right',
    },
  },
];
