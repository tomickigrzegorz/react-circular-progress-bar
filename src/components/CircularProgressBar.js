import React, { memo, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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
    width: size,
    height: size,
    borderRadius: '50%',
    boxShadow,
  };
};

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

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

  useEffect(() => {
    if (ref && ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};

const GradientLinear = ({ index, linearGradient }) => {
  let number = -100;
  let id = `linear-gradient-${index}`;
  return (
    <defs>
      <linearGradient id={id}>
        {linearGradient.map((gradient, index) => {
          number += 100;
          return (
            <stop
              key={index}
              offset={number / (linearGradient.length - 1) + '%'}
              stopColor={gradient}
            ></stop>
          );
        })}
      </linearGradient>
    </defs>
  );
};

const CircleTop = memo(
  ({ id, linearGradient, counter, stroke, round, colorSlice }) => {
    const gradient =
      linearGradient !== undefined ? `url(#linear-gradient-${id})` : colorSlice;

    return (
      <>
        {linearGradient && (
          <GradientLinear index={id} linearGradient={linearGradient} />
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
          strokeLinecap={round ? 'round' : ''}
          strokeDasharray={counter * 2.64 + ', 20000'}
        />
      </>
    );
  }
);

const CircleBackground = memo(({ stroke, strokeBottom, colorCircle }) => {
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
});

const CircleText = memo(
  ({ number, counter, fontSize, fontWeight, fontColor }) => {
    return number ? (
      <text
        x="50%"
        y="50%"
        fontSize={fontSize}
        fontWeight={fontWeight}
        fill={fontColor}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {counter}%
      </text>
    ) : null;
  }
);

const CircleWrapper = memo((props) => {
  return (
    <svg
      role="img"
      width={props.size}
      height={props.size}
      data-index={props.id}
      viewBox="0 0 100 100"
      aria-labelledby="circular progress bar"
    >
      <CircleText {...props} />
      <CircleBackground {...props} />
      <CircleTop {...props} />
    </svg>
  );
});

const CircularProgressBar = (props) => {
  const { percent } = props;

  const [counter, setCounter] = useState(0);
  const ref = useRef();
  const show = useOnScreen(ref);

  useEffect(() => {
    if (!show) return;

    let angle = Number(ref.current?.dataset?.angel);

    if (percent > 100 || percent < 0 || angle === percent) return;

    let request;
    const performAnimation = () => {
      if (angle > percent) {
        setCounter((count) => count - 1);
      } else if (angle < percent) {
        setCounter((count) => count + 1);
      }
    };

    request = requestAnimationFrame(performAnimation);

    return () => cancelAnimationFrame(request);
  }, [counter, show, percent]);

  return (
    <div ref={ref} style={styleObj(props)} data-angel={counter}>
      <CircleWrapper counter={counter} {...props} />
    </div>
  );
};

CircularProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  colorSlice: PropTypes.string,
  colorCircle: PropTypes.string,
  stroke: PropTypes.number,
  strokeBottom: PropTypes.number,
  round: PropTypes.bool,
  opacity: PropTypes.number,
  number: PropTypes.bool,
  size: PropTypes.number,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  fontColor: PropTypes.string,
  linearGradient: PropTypes.array,
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
