import React, { useContext } from 'react';
import { PropsContext } from './Provider';

import GradientLinear from './GradientLinear';

const Top = () => {
  let { id, linearGradient, inverse, counter, stroke, round, colorSlice } =
    useContext(PropsContext);

  const gradient =
    linearGradient !== undefined
      ? `url(#linear-gradient-${id || 0})`
      : colorSlice;

  const getDashOffset = (counter, inverse) => {
    const angle = 264 - (counter / 100) * 264;
    return inverse ? -angle : angle;
  };

  return (
    <>
      {linearGradient && (
        <GradientLinear index={id || 0} linearGradient={linearGradient} />
      )}
      <circle
        cx="50%"
        cy="50%"
        r="42"
        shapeRendering="geometricPrecision"
        fill="none"
        style={{
          transform: 'rotate(-90deg)',
          transformOrigin: '50% 50%',
        }}
        stroke={gradient}
        strokeWidth={stroke}
        strokeLinecap={round ? 'round' : 'butt'}
        strokeDashoffset={getDashOffset(counter, inverse)}
        strokeDasharray={264}
      />
    </>
  );
};

export default Top;
