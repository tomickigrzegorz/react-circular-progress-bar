import React, { useEffect, useState } from "react";

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const config = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
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

const styleObj = ({ size }) => {
  return {
    width: size,
    height: size
  };
};

export { styleObj, useOnScreen };
