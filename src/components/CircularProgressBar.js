import React, { memo, useRef, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const globalProps = React.createContext();

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
    position: 'relative',
    width: size,
    height: size,
    borderRadius: '50%',
    boxShadow,
  };
};

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
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

    if (ref && ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};

const GradientLinear = ({ index }) => {
  let { linearGradient } = useContext(globalProps);

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

const StyleCenter = memo(() => {
  let { children } = useContext(globalProps);
  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      {children ? children : null}
    </div>
  );
});

const CircleTop = memo(() => {
  let { id, linearGradient, counter, stroke, round, colorSlice } =
    useContext(globalProps);

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

const CircleBackground = memo(() => {
  let { stroke, strokeBottom, colorCircle } = useContext(globalProps);
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

const CircleText = memo(() => {
  let { number, counter, textPosition, fontSize, fontWeight, fontColor } =
    useContext(globalProps);
  return number ? (
    <text
      x="50%"
      y="50%"
      fontSize={fontSize}
      fontWeight={fontWeight}
      fill={fontColor}
      textAnchor="middle"
      dy={textPosition} // fixed issue with centering text vertical
    >
      {counter}%
    </text>
  ) : null;
});

const CircleWrapper = memo(() => {
  let { id, size } = useContext(globalProps);
  return (
    <svg
      role="img"
      width={size}
      height={size}
      data-index={id || 0}
      viewBox="0 0 100 100"
      aria-labelledby="circular progress bar"
    >
      <CircleText />
      <CircleBackground />
      <CircleTop />
    </svg>
  );
});

const CircularProgressBar = (props) => {
  const { children, percent, speed, animationOff } = props;

  const [counter, setCounter] = useState(animationOff ? percent : 0);
  const ref = useRef();
  const show = useOnScreen(ref);

  useEffect(() => {
    if (!show) return;

    // turn off the animation
    if (animationOff) {
      setCounter(percent);
      return;
    }

    let angle = Number(ref.current?.dataset?.angel);

    if (percent > 100 || percent < 0 || angle === percent) return;

    const fps = speed || 60;
    const interval = 1000 / fps;
    const tolerance = 0.1;
    let then = performance.now();

    let request;
    const animateLoop = (now) => {
      request = requestAnimationFrame(animateLoop);
      const delta = now - then;

      if (delta >= interval - tolerance) {
        then = now - (delta % interval);

        if (angle > percent) {
          setCounter((count) => count - 1);
        } else if (angle < percent) {
          setCounter((count) => count + 1);
        }
      }
    };

    request = requestAnimationFrame(animateLoop);

    return () => cancelAnimationFrame(request);
  }, [counter, animationOff, speed, show, percent]);

  const value = { ...props, counter };

  return (
    <globalProps.Provider value={value}>
      <div ref={ref} style={styleObj(props)} data-angel={counter}>
        {children && <StyleCenter />}
        <CircleWrapper />
      </div>
    </globalProps.Provider>
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
  speed: PropTypes.number,
  textPosition: PropTypes.string,
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
  textPosition: '.35em',
  fontSize: '1.6rem',
  fontColor: '#365b74',
  fontWeight: 400,
};

export default CircularProgressBar;
