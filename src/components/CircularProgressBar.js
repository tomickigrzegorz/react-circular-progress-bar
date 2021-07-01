import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Text = ({ counter, fontSize, fontWeight }) => {
  return (
    <text
      x="50%"
      y="50%"
      fontSize={fontSize}
      fontWeight={fontWeight}
      fill="#365b74"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {counter}%
    </text>
  )
}

const CircleBackground = ({ stroke, colorCircle }) => {
  return (
    <circle
      cx="50"
      cy="50"
      r="42"
      shapeRendering="geometricPrecision"
      fill="none"
      stroke={colorCircle}
      strokeWidth={stroke}>
    </circle>
  )
}

const CircleTop = (props) => {
  const { linearGradient, counter, stroke, round, colorSlice } = props;
  const dasharray = counter * 2.64 + ', 20000';
  const gradient = linearGradient !== undefined ? "url(#linear-gradient)" : colorSlice

  return (
    <>
      {linearGradient && <GradientLinear linearGradient={linearGradient} />}
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
        strokeDasharray={dasharray}
        data-angel={counter}>
      </circle>
    </>
  )
}

const GradientLinear = ({ linearGradient }) => {
  let number = -100;
  return (
    <defs>
      <linearGradient id="linear-gradient">
        {linearGradient.map((gradient, index) => {
          number += 100;
          return <stop key={index} offset={number / (linearGradient.length - 1) + '%'} stopColor={gradient}></stop>
        })}
      </linearGradient>
    </defs>
  );
}

const hex2rgb = (hex, opacity = 10) => {
  const c = typeof hex === 'string' ? parseInt(hex.replace('#', ''), 16) : hex;
  return `rgba(${c >> 16}, ${(c & 0xff00) >> 8}, ${c & 0xff}, ${opacity / 100})`;
}

const CircularProgressBar = props => {
  const {
    percent,
    number,
    stroke,
    colorSlice,
    colorCircle,
    opacity,
    size
  } = props;

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    let request

    const performAnimation = () => {
      if (counter >= percent) return;
      setCounter(x => x + 1)
      request = requestAnimationFrame(performAnimation)
    }

    request = requestAnimationFrame(performAnimation)

    return () => cancelAnimationFrame(request)
  })

  const styleObj = (colorCircle) => {
    const boxShadow = colorCircle === undefined
      ? `inset 0px 0px ${stroke}px ${stroke}px ${hex2rgb(colorSlice, opacity)}`
      : '';
    return {
      width: size,
      height: size,
      borderRadius: '50%',
      boxShadow
    }
  };

  return (
    <div style={styleObj(colorCircle)}>
      <svg width={size} height={size} viewBox="0 0 100 100">
        {number && <Text counter={counter} {...props} />}
        <CircleBackground counter={counter} {...props} />
        <CircleTop counter={counter} {...props} />
      </svg>
    </div>
  );
}

CircularProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  colorSlice: PropTypes.string,
  colorCircle: PropTypes.string,
  stroke: PropTypes.number,
  round: PropTypes.bool,
  opacity: PropTypes.number,
  number: PropTypes.bool,
  size: PropTypes.number,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  fontColor: PropTypes.string,
  linearGradient: PropTypes.array
};

CircularProgressBar.defaultProps = {
  colorSlice: '#00a1ff',
  round: false,
  number: true,
  stroke: 10,
  opacity: 10,
  size: 200,
  fontSize: '1.6rem',
  fontColor: '#365b74',
  fontWeight: 400,
};

export default CircularProgressBar;