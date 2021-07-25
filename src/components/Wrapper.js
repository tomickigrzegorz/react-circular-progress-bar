import React, { useContext } from 'react';
import { PropsContext } from './Provider';

const Wrapper = ({ children }) => {
  let { id, size } = useContext(PropsContext);
  return (
    <svg
      role="img"
      width={size}
      height={size}
      data-index={id || 0}
      viewBox="0 0 100 100"
      aria-labelledby="circular progress bar"
    >
      {children}
    </svg>
  );
};

export default Wrapper;
