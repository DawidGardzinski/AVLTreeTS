import { MutableRefObject, useEffect } from 'react';

export const useOutsideAlerter = (
  ref: MutableRefObject<HTMLElement | null>,
  cb: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, cb]);
};
