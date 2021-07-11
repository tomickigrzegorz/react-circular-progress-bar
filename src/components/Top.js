import React, { memo, useContext } from 'react';
import { PropsContext } from './Provider';

import GradientLinear from './GradientLinear';

const Top = memo(() => {
  let { id, linearGradient, counter, stroke, round, colorSlice } =
    useContext(PropsContext);

  const gradient =
    linearGradient !== undefined
      ? `url(#linear-gradient-${id || 0})`
      : colorSlice;

  return (
    <>
      {linearGradient && (
        <GradientLinear index={id || 0} linearGradient={linearGradient} />
      )}
      <circle
        cx="50"
        cy="50"
        r="42"
        shapeRendering="geometricPrecision"
        fill="none"
        transform="rotate(-90, 50, 50)"
        stroke={gradient}
        strokeWidth={stroke}
        strokeLinecap={round ? 'round' : 'butt'}
        strokeDasharray={counter * 2.64 + ', 20000'}
      />
    </>
  );
});

export default Top;
