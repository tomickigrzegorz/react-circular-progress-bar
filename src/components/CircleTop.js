import React, { memo } from 'react';

const GradientLinear = ({ index, linearGradient }) => {
  let number = -100
  let id = `linear-gradient-${index}`
  return (
    <defs>
      <linearGradient id={id}>
        {linearGradient.map((gradient, index) => {
          number += 100;
          return <stop key={index} offset={number / (linearGradient.length - 1) + '%'} stopColor={gradient}></stop>
        })}
      </linearGradient>
    </defs>
  );
}

const CircleTop = memo(({ id, linearGradient, counter, stroke, round, colorSlice }) => {
  const gradient = linearGradient !== undefined ? `url(#linear-gradient-${id})` : colorSlice

  return (
    <>
      {linearGradient && <GradientLinear index={id} linearGradient={linearGradient} />}
      <circle
        cx="50"
        cy="50"
        r="42"
        shapeRendering="geometricPrecision"
        fill="none"
        transform="rotate(-90, 50, 50)"
        stroke={gradient}
        strokeWidth={stroke}
        strokeLinecap={round ? 'round' : ''}
        strokeDasharray={counter * 2.64 + ', 20000'}
      >
      </circle>
    </>
  )
})

export default CircleTop;