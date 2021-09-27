import React, { useRef, useEffect, useState } from "react";

import { PropsContext } from "./Provider";

import Text from "./Text";
import Background from "./Background";
import Wrapper from "./Wrapper";
import Top from "./Top";

import StyleCenter from "./StyleCenter";

import { CircleType, CircleDefaultProps } from "../types";

import { styleObj, useOnScreen } from "../utils";

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

    const fps = speed;
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
        }
        if (angle < percent) {
          setCounter((count) => count + 1);
        }
      }
    };

    request = requestAnimationFrame(animateLoop);

    return () => cancelAnimationFrame(request);
  }, [counter, animationOff, speed, show, percent]);

  const value = { ...props, counter };

  return (
    <div ref={ref} style={styleObj(props)} data-angel={counter}>
      <PropsContext.Provider value={value}>
        {children && <StyleCenter />}
        <Wrapper>
          {props.colorCircle && <Background />}
          <Top />
          <Text />
        </Wrapper>
      </PropsContext.Provider>
    </div>
  );
};

CircularProgressBar.propTypes = CircleType;

CircularProgressBar.defaultProps = CircleDefaultProps;

export default CircularProgressBar;
