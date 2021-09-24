import React, { useState, Fragment } from "react";
import CircularProgressBar from "./components/CircularProgressBar";

const minimal = [
  {
    id: 0,
    percent: 75
  }
];

const simple = [
  {
    id: 1,
    percent: 75,
    colorSlice: "#BF360C",
    colorCircle: "#f1f1f1",
    fontWeight: 100
  }
];

const linearGradient = [
  {
    id: 2,
    linearGradient: ["yellow", "#ff0000"],
    percent: 75,
    colorCircle: "#e6e6e6",
    round: true
  }
];

const counterclockwise = [
  {
    id: 3,
    inverse: true,
    percent: 75,
    colorSlice: "#AB47BC",
    colorCircle: "#f1f1f1",
    fontWeight: 100
  }
];

const strokeDasharray = [
  {
    id: 4,
    strokeDasharray: "1, 2",
    percent: 75,
    colorSlice: "#F5F5F5",
    colorCircle: "#424242",
    stroke: 5,
    strokeBottom: 10,
    round: true
  }
];

const animationOff = [
  {
    id: 5,
    animationOff: true,
    percent: 75,
    colorSlice: "#CDDC39",
    colorCircle: "#f1f1f1",
    fontWeight: 100
  }
];

const withoutNumber = [
  {
    id: 6,
    number: false,
    percent: 75,
    colorSlice: "#000",
    colorCircle: "#e6e6e6"
  }
];

const rotation = [
  {
    id: 7,
    rotation: 90,
    percent: 75,
    colorSlice: "#ff8c69",
    colorCircle: "#f1f1f1",
    fontWeight: 100
  }
];

const fill = [
  {
    id: 8,
    fill: "#EFEBE9",
    percent: 75,
    stroke: 6,
    strokeBottom: 10,
    colorSlice: "#4E342E",
    colorCircle: "#EFEBE9",
    fontSize: "1.3em",
    round: true
  }
];

const unit = [
  {
    id: 9,
    unit: "PL",
    percent: 75,
    stroke: 5,
    strokeBottom: 10,
    colorSlice: "#fff",
    colorCircle: "#F50057",
    round: true
  }
];

const strokeBottom = [
  {
    id: 10,
    strokeBottom: 5,
    percent: 75,
    colorSlice: "#EC407A",
    colorCircle: "#f1f1f1",
    round: true
  }
];

const speed = [
  {
    id: 11,
    speed: 30,
    percent: 75,
    colorSlice: "#DD2C00",
    colorCircle: "#f1f1f1",
    round: true
  }
];

const cut = [
  {
    id: 12,
    cut: 30,
    percent: 75,
    rotation: 144,
    colorSlice: "#F50057",
    colorCircle: "#f1f1f1",
    textPosition: "1em",
    fontSize: "1.2rem"
  }
];

const images = [
  {
    id: 13,
    percent: 75,
    fontWeight: 100,
    colorSlice: "#6200EA",
    colorCircle: "#f1f1f1",
    fontSize: "1rem",
    textPosition: "1.5em"
  }
];

const imagesWithText = [
  {
    id: 14,
    percent: 75,
    colorSlice: "#795548",
    colorCircle: "#f1f1f1",
    number: false
  }
];

function App() {
  const [progress, setProgress] = useState(75);
  const percent = { percent: progress };

  const onClick = (e) => {
    e.preventDefault();
    e.target.closest("section").lastElementChild.classList.toggle("active");
  };

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
        <section>
          <div className="flex info">
            <div className="info-name">minimal</div>
            <div className="info-code" onClick={onClick}>
              code
            </div>
          </div>
          {minimal.map((props, index) => {
            const object = { ...props, ...percent };
            return <CircularProgressBar key={index} {...object} />;
          })}
          <div className="precode">
            <pre>
              <code>{JSON.stringify(minimal[0], null, 2)}</code>
            </pre>
          </div>
        </section>
        <section>
          <div className="flex info">
            <div className="info-name">minimal width shadow</div>
            <div className="info-code" onClick={onClick}>
              code
            </div>
          </div>
          <div className="shadow">
            {minimal.map((props, index) => {
              const object = { ...props, ...percent };
              return <CircularProgressBar key={index} {...object} />;
            })}
          </div>
          <div className="precode">
            <pre>
              <code>{JSON.stringify(minimal[0], null, 2)}</code>
            </pre>
          </div>
        </section>
        <section>
          <div className="flex info">
            <div className="info-name">simple</div>
            <div className="info-code" onClick={onClick}>
              code
            </div>
          </div>
          {simple.map((props, index) => {
            const object = { ...props, ...percent };
            return <CircularProgressBar key={index} {...object} />;
          })}
          <div className="precode">
            <pre>
              <code>{JSON.stringify(simple[0], null, 2)}</code>
            </pre>
          </div>
        </section>
        <section>
          <div className="flex info">
            <div className="info-name">linear gradient</div>
            <div className="info-code" onClick={onClick}>
              code
            </div>
          </div>
          {linearGradient.map((props, index) => {
            const object = { ...props, ...percent };
            return <CircularProgressBar key={index} {...object} />;
          })}
          <div className="precode">
            <pre>
              <code>{JSON.stringify(linearGradient[0], null, 2)}</code>
            </pre>
          </div>
        </section>
        <section>
          <div className="flex info">
            <div className="info-name">counterclockwise</div>
            <div className="info-code" onClick={onClick}>
              code
            </div>
          </div>
          {counterclockwise.map((props, index) => {
            const object = { ...props, ...percent };
            return <CircularProgressBar key={index} {...object} />;
          })}
          <div className="precode">
            <pre>
              <code>{JSON.stringify(counterclockwise[0], null, 2)}</code>
            </pre>
          </div>
        </section>
        <section>
          <div className="flex info">
            <div className="info-name">stroke-dasharray</div>
            <div className="info-code" onClick={onClick}>
              code
            </div>
          </div>
          {strokeDasharray.map((props, index) => {
            const object = { ...props, ...percent };
            return <CircularProgressBar key={index} {...object} />;
          })}
          <div className="precode">
            <pre>
              <code>{JSON.stringify(strokeDasharray[0], null, 2)}</code>
            </pre>
          </div>
        </section>
        <section>
          <div className="flex info">
            <div className="info-name">animation off</div>
            <div className="info-code" onClick={onClick}>
              code
            </div>
          </div>
          {animationOff.map((props, index) => {
            const object = { ...props, ...percent };
            return <CircularProgressBar key={index} {...object} />;
          })}
          <div className="precode">
            <pre>
              <code>{JSON.stringify(animationOff[0], null, 2)}</code>
            </pre>
          </div>
        </section>
        <section>
          <div className="flex info">
            <div className="info-name">without number</div>
            <div className="info-code" onClick={onClick}>
              code
            </div>
          </div>
          {withoutNumber.map((props, index) => {
            const object = { ...props, ...percent };
            return <CircularProgressBar key={index} {...object} />;
          })}
          <div className="precode">
            <pre>
              <code>{JSON.stringify(withoutNumber[0], null, 2)}</code>
            </pre>
          </div>
        </section>
        <section>
          <div className="flex info">
            <div className="info-name">rotation</div>
            <div className="info-code" onClick={onClick}>
              code
            </div>
          </div>
          {rotation.map((props, index) => {
            const object = { ...props, ...percent };
            return <CircularProgressBar key={index} {...object} />;
          })}
          <div className="precode">
            <pre>
              <code>{JSON.stringify(rotation[0], null, 2)}</code>
            </pre>
          </div>
        </section>
        <section>
          <div className="flex info">
            <div className="info-name">fill</div>
            <div className="info-code" onClick={onClick}>
              code
            </div>
          </div>
          {fill.map((props, index) => {
            const object = { ...props, ...percent };
            return <CircularProgressBar key={index} {...object} />;
          })}
          <div className="precode">
            <pre>
              <code>{JSON.stringify(fill[0], null, 2)}</code>
            </pre>
          </div>
        </section>
        <section>
          <div className="flex info">
            <div className="info-name">unit</div>
            <div className="info-code" onClick={onClick}>
              code
            </div>
          </div>
          {unit.map((props, index) => {
            const object = { ...props, ...percent };
            return <CircularProgressBar key={index} {...object} />;
          })}
          <div className="precode">
            <pre>
              <code>{JSON.stringify(unit[0], null, 2)}</code>
            </pre>
          </div>
        </section>
        <section>
          <div className="flex info">
            <div className="info-name">stroke bottom</div>
            <div className="info-code" onClick={onClick}>
              code
            </div>
          </div>
          {strokeBottom.map((props, index) => {
            const object = { ...props, ...percent };
            return <CircularProgressBar key={index} {...object} />;
          })}
          <div className="precode">
            <pre>
              <code>{JSON.stringify(strokeBottom[0], null, 2)}</code>
            </pre>
          </div>
        </section>
        <section>
          <div className="flex info">
            <div className="info-name">speed</div>
            <div className="info-code" onClick={onClick}>
              code
            </div>
          </div>
          {speed.map((props, index) => {
            const object = { ...props, ...percent };
            return <CircularProgressBar key={index} {...object} />;
          })}
          <div className="precode">
            <pre>
              <code>{JSON.stringify(speed[0], null, 2)}</code>
            </pre>
          </div>
        </section>
        <section>
          <div className="flex info">
            <div className="info-name">cut</div>
            <div className="info-code" onClick={onClick}>
              code
            </div>
          </div>
          {cut.map((props, index) => {
            const object = { ...props, ...percent };
            return <CircularProgressBar key={index} {...object} />;
          })}
          <div className="precode">
            <pre>
              <code>{JSON.stringify(cut[0], null, 2)}</code>
            </pre>
          </div>
        </section>

        <section>
          <div className="flex info">
            <div className="info-name">image</div>
            <div className="info-code" onClick={onClick}>
              code
            </div>
          </div>
          {images.map((props, index) => {
            const object = { ...props, ...percent };
            return (
              <CircularProgressBar key={index} {...object}>
                <img
                  src="https://picsum.photos/100/100"
                  style={{
                    width: "60px",
                    borderRadius: "50%",
                    marginTop: "-40px",
                    padding: "2px",
                    border: "3px solid salmon"
                  }}
                  alt="Random"
                />
              </CircularProgressBar>
            );
          })}
          <div className="precode">
            <pre>
              <code>{JSON.stringify(images[0], null, 2)}</code>
            </pre>
          </div>
        </section>
        <section>
          <div className="flex info">
            <div className="info-name">image without number</div>
            <div className="info-code" onClick={onClick}>
              code
            </div>
          </div>
          {imagesWithText.map((props, index) => {
            const object = { ...props, ...percent };
            return (
              <CircularProgressBar key={index} {...object}>
                <img
                  src="https://picsum.photos/100/100"
                  style={{
                    width: "60px",
                    borderRadius: "50%",
                    padding: "2px",
                    border: "2px solid black"
                  }}
                  alt="Images with text"
                />
                <div style={{ textAlign: "center", padding: "0 35px" }}>
                  Lorem, ipsum dolor.
                </div>
              </CircularProgressBar>
            );
          })}
          <div className="precode">
            <pre>
              <code>{JSON.stringify(imagesWithText[0], null, 2)}</code>
            </pre>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default App;
