import { useEffect } from 'react';

/* Keeps the page-level overflow fix active while a HomeTwo-styled page is mounted. */
export default function useHomeTwoDocument() {
  useEffect(() => {
    document.documentElement.classList.add('hometwo-active');
    return () => document.documentElement.classList.remove('hometwo-active');
  }, []);
}

