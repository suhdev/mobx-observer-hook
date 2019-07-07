import { useState, useEffect, ReactElement, useRef } from 'react';
import { reaction } from 'mobx';

export function useObserver(fn: () => ReactElement, deps: any[] = []) {
  const [view, setView] = useState(fn);
  const ref = useRef(0);

  useEffect(
    () => {
      return reaction(
        fn,
        (v) => {
          if (!ref.current) {
            ref.current = 1;
            return;
          }
          setView(v);
        });
    },
    deps);
  return view;
}
