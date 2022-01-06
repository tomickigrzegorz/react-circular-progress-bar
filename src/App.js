import React, { useState, useEffect, Fragment } from "react";
import CircularProgressBar from "./components/CircularProgressBar";

const examples = [
  {
    id: 0,
    name: "minimal",
    percent: 75
  },
  {
    id: 1,
    name: "minimal width shadow",
    percent: 75,
    styles: {
      borderRadius: "50%",
      boxShadow: "inset 0 0 25px 10px #a2caff"
    }
  },
  {
    id: 2,
    name: "simple",
    colorSlice: "#BF360C",
    colorCircle: "#f1f1f1",
    fontWeight: 100,
    percent: 75
  },
  {
    id: 3,
    name: "linear gradient",
    linearGradient: ["yellow", "#ff0000"],
    percent: 75,
    colorCircle: "#e6e6e6",
    round: true
  },
  {
    id: 4,
    name: "counterclockwise",
    inverse: true,
    percent: 75,
    colorSlice: "#AB47BC",
    colorCircle: "#f1f1f1",
    fontWeight: 100
  },
  {
    id: 5,
    name: "stroke-dasharray",
    strokeDasharray: "1, 2",
    percent: 75,
    colorSlice: "#F5F5F5",
    colorCircle: "#424242",
    stroke: 5,
    strokeBottom: 10,
    round: true
  },
  {
    id: 6,
    name: "animation off",
    animationOff: true,
    percent: 75,
    colorSlice: "#CDDC39",
    colorCircle: "#f1f1f1",
    fontWeight: 100
  },
  {
    id: 7,
    name: "without number",
    number: false,
    percent: 75,
    colorSlice: "#000",
    colorCircle: "#e6e6e6"
  },
  {
    id: 8,
    name: "rotation",
    rotation: 90,
    percent: 75,
    colorSlice: "#ff8c69",
    colorCircle: "#f1f1f1",
    fontWeight: 100
  },
  {
    id: 9,
    name: "fill",
    fill: "#EFEBE9",
    percent: 75,
    stroke: 6,
    strokeBottom: 10,
    colorSlice: "#4E342E",
    colorCircle: "#EFEBE9",
    fontSize: "1.3em",
    round: true
  },
  {
    id: 10,
    name: "unit",
    unit: "PL",
    percent: 75,
    stroke: 5,
    strokeBottom: 10,
    colorSlice: "#fff",
    colorCircle: "#F50057",
    round: true
  },
  {
    id: 11,
    name: "stroke-bottom",
    strokeBottom: 5,
    percent: 75,
    colorSlice: "#EC407A",
    colorCircle: "#f1f1f1",
    round: true
  },
  {
    id: 12,
    name: "speed",
    speed: 30,
    percent: 75,
    colorSlice: "#DD2C00",
    colorCircle: "#f1f1f1",
    round: true
  },
  {
    id: 13,
    name: "cut",
    cut: 30,
    percent: 75,
    rotation: 144,
    colorSlice: "#F50057",
    colorCircle: "#f1f1f1",
    textPosition: "1em",
    fontSize: "1.2rem"
  },
  {
    id: 14,
    name: "textposition",
    percent: 75,
    textPosition: "1.5em",
    colorSlice: "#880E4F",
    colorCircle: "#f1f1f1",
    fontSize: "1em"
  },
  {
    id: 15,
    name: "mixed",
    percent: 75,
    textPosition: "0em",
    colorSlice: "#FF1744",
    colorCircle: "#fff",
    stroke: 5,
    strokeBottom: 10,
    strokeDasharray: "1, 3",
    fontSize: "1.2rem",
    fontWeight: 600,
    round: true,
    styles: {
      borderRadius: "50%",
      boxShadow: "inset 0 0 25px 10px #f50057"
    }
  },
  {
    id: 16,
    name: "smooth animation",
    animationSmooth: "1s ease-out",
    percent: 75,
    colorSlice: "#FF6D00",
    colorCircle: "#f1f1f1"
  }
];

const update = [
  {
    id: 55,
    name: "update",
    percent: 75,
    colorSlice: "#BF360C",
    colorCircle: "#f1f1f1",
    fontWeight: 100
  }
];

function CircularSection(object) {
  const [isActive, setIsActive] = useState(false);

  // remove name from object for presentation
  const newObject = Object.keys(object).reduce((obj, key) => {
    if (key !== "name") {
      obj[key] = object[key];
    }
    return obj;
  }, {});

  return (
    <section>
      <div className="flex info">
        <div className="info-name">{object.name}</div>
        <div className="info-code" onClick={() => setIsActive(!isActive)}>
          code
        </div>
      </div>
      <CircularProgressBar {...object}>
        {object.id === 14 && (
          <img
            src="https://picsum.photos/100/100"
            style={{
              position: "absolute",
              width: "50px",
              borderRadius: "50%",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -90%)",
              padding: "2px",
              border: "3px solid salmon"
            }}
            alt="Random"
          />
        )}
        {object.id === 15 && (
          <Fragment>
            <div
              style={{
                position: "absolute",
                fontSize: "2rem",
                margin: "auto",
                width: "100%",
                bottom: "45px",
                textAlign: "center",
                animation: "heart 0.8s linear infinite",
                textShadow: "0px 0px 10px #f50057"
              }}>
              &#10084;
            </div>
          </Fragment>
        )}
      </CircularProgressBar>
      {isActive && (
        <div className="precode">
          <pre>
            <code>{JSON.stringify(newObject, null, 2)}</code>
          </pre>
        </div>
      )}
    </section>
  );
}

function App() {
  const [progress, setProgress] = useState(75);
  const percent = { percent: progress };

  const [first, setFirst] = useState(update[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      const typeFont = [100, 200, 300, 400, 500, 600, 700];
      const colorHex = `#${Math.floor((Math.random() * 0xffffff) << 0).toString(
        16
      )}`;
      setFirst({
        ...update[0],
        id: 55,
        percent: Math.floor(Math.random() * 100 + 1),
        colorSlice: colorHex,
        fontColor: colorHex,
        fontSize: `${Math.floor(Math.random() * (1.3 - 1 + 1) + 1)}rem`,
        fontWeight: typeFont[Math.floor(Math.random() * typeFont.length)]
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <h1>circular-progress-bar</h1>
      <div className="flex progress-wrapper">
        <div className="progress">progress</div>
        <input
          type="range"
          value={progress}
          min="0"
          max="100"
          onChange={(event) => setProgress(parseInt(event.target.value, 10))}
        />
      </div>
      <div className="flex container">
        {examples.map((props, index) => {
          const obj = { ...props, ...percent };
          return <CircularSection key={index} {...obj} />;
        })}

        {update.map((props, index) => {
          const obj = { ...props, ...percent, ...first };
          return <CircularSection key={index} {...obj} />;
        })}
      </div>
    </Fragment>
  );
}

export default App;
