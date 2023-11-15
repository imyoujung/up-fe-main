import { useRef, useEffect } from 'react';

function useDebouncedCallback(callback: () => void, delay: number) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debounced = useRef(
    debounce(() => {
      callbackRef.current();
    }, delay),
  );

  return debounced.current;
}

function debounce(func: () => void, wait: number) {
  let timeout: NodeJS.Timeout;

  return function executedFunction() {
    const later = () => {
      clearTimeout(timeout);
      func();
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default useDebouncedCallback;
