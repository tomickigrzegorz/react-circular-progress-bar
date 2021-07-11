import React, { useEffect, useState } from 'react';

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const config = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio >= 0.5) {
        setIntersecting(entry.isIntersecting);
      }
    }, config);

    if (ref && ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};

const hex2rgb = (hex, opacity = 10) => {
  const c = typeof hex === 'string' ? parseInt(hex.replace('#', ''), 16) : hex;
  return `rgba(${c >> 16},
    ${(c & 0xff00) >> 8}, 
    ${c & 0xff}, 
    ${opacity / 100})`;
};

const styleObj = ({ stroke, colorSlice, colorCircle, opacity, size }) => {
  const boxShadow =
    colorCircle === undefined
      ? `inset 0px 0px ${stroke}px ${stroke}px ${hex2rgb(colorSlice, opacity)}`
      : '';
  return {
    position: 'relative',
    width: size,
    height: size,
    borderRadius: '50%',
    boxShadow,
  };
};

export { styleObj, useOnScreen };
