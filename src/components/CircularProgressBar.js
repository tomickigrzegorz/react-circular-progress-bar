import React, { memo, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CircleTop from './CircleTop';
import CircleBackground from './CircleBackground';
import CircleText from './CircleText';

const hex2rgb = (hex, opacity = 10) => {
  const c = typeof hex === 'string' ? parseInt(hex.replace('#', ''), 16) : hex;
  return `rgba(${c >> 16}, ${(c & 0xff00) >> 8}, ${c & 0xff}, ${opacity / 100})`;
}

const styleObj = (props, colorCircle) => {
  const { stroke, colorSlice, opacity, size } = props

  const boxShadow = colorCircle === undefined
    ? `inset 0px 0px ${stroke}px ${stroke}px ${hex2rgb(colorSlice, opacity)}`
    : '';
  return {
    width: size,
    height: size,
    borderRadius: '50%',
    boxShadow
  }
}

const useOnScreen = ref => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {

    const config = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }

    let ovserver;
    if (ref.current) {
      ovserver = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
              setIntersecting(entry.isIntersecting)
              ovserver.unobserve(ref.current)
            }
          });
        }, config
      )
      ovserver.observe(ref.current)
    }

    return () => {
      ovserver.disconnect()
    };
  }, [ref])

  return isIntersecting
}

const CircleWrapper = props => {
  const { id, size } = props;
  return (
    <svg width={size} height={size} data-index={id} viewBox="0 0 100 100">
      <CircleText {...props} />
      <CircleBackground {...props} />
      <CircleTop {...props} />
    </svg>
  )
}

const CircularProgressBar = memo(props => {
  const {
    percent,
    colorCircle,
  } = props;

  const [counter, setCounter] = useState(0)
  const ref = useRef()
  const show = useOnScreen(ref)

  useEffect(() => {
    if (!show) return;

    let angle = ref.current?.dataset?.angel;

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
  }, [counter, show, percent])

  return (
    <div ref={ref} style={styleObj(props, colorCircle)} data-angel={counter}>
      <CircleWrapper counter={counter} {...props} />
    </div>
  );
})

CircularProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  colorSlice: PropTypes.string,
  colorCircle: PropTypes.string,
  initial: PropTypes.bool,
  stroke: PropTypes.number,
  round: PropTypes.bool,
  opacity: PropTypes.number,
  number: PropTypes.bool,
  size: PropTypes.number,
  index: PropTypes.number,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  fontColor: PropTypes.string,
  linearGradient: PropTypes.array
};

CircularProgressBar.defaultProps = {
  colorSlice: '#00a1ff',
  round: false,
  initial: true,
  number: true,
  stroke: 10,
  opacity: 10,
  size: 200,
  fontSize: '1.6rem',
  fontColor: '#365b74',
  fontWeight: 400,
};

export default CircularProgressBar;