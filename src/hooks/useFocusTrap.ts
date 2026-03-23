import { useEffect, useRef } from 'react';

interface Params {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const useFocusTrap = ({ isOpen, setIsOpen }: Params) => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      "[tabindex]:not([tabindex='-1'])",
    ];

    const modal = navRef.current;
    if (!modal) return;

    const focusableEls = modal.querySelectorAll(focusableSelectors.join(','));
    const firstEl = focusableEls[0] as HTMLElement;
    const lastEl = focusableEls[focusableEls.length - 1] as HTMLElement;

    // Focus the first element when modal opens
    firstEl?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    };

    modal.addEventListener('keydown', handleKeyDown);
    return () => modal.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  return navRef;
};
