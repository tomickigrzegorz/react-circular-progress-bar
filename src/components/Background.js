import React, { useContext } from 'react';
import { PropsContext } from './Provider';

const Background = () => {
  let { stroke, strokeBottom, colorCircle } = useContext(PropsContext);
  return (
    <circle
      cx="50"
      cy="50"
      r="42"
      shapeRendering="geometricPrecision"
      fill="none"
      stroke={colorCircle}
      strokeWidth={strokeBottom || stroke}
    />
  );
};

export default Background;
