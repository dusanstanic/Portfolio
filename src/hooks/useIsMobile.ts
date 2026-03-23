import { useMediaQuery } from './useMediaQuery';

export function useIsMobile() {
  const isMobile = useMediaQuery('(max-width: 500px)');

  return isMobile;
}
