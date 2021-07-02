import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import CircleBackground from './CircleBackground';
import CircleTop from './CircleTop';

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
  const counterRef = useRef(null)

  useEffect(() => {
    let angle = counterRef.current?.dataset?.angel;

    if (percent > 100 || percent <= 0 || angle === percent) return;

    let request
    const performAnimation = () => {
      if (angle > percent) {
        setCounter(x => x - 1)
      } else if (angle < percent) {
        setCounter(x => x + 1)
      }
    }

    request = requestAnimationFrame(performAnimation)

    return () => cancelAnimationFrame(request)

  }, [counter, percent])

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
      <svg ref={counterRef} width={size} height={size} viewBox="0 0 100 100" data-angel={counter}>
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