import React from "react";

import CircularProgressBar from "../components/CircularProgressBar";

const styleObj = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100%",
  padding: "40px",
  margin: "-1rem auto",
  fontFamily:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"
};

export default {
  component: CircularProgressBar,
  title: "CircularProgressBar",
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    percent: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description:
        "Represents the progress bar and animation of the animation progress expressed by a number e.g. 65%"
    },
    colorSlice: {
      control: "color",
      description:
        'Progress layer color and background "#ffff00", "brown", ...',
      table: { defaultValue: { summary: '"#00a1ff"' } }
    },
    fill: {
      control: "color",
      description: "Inner circle color",
      table: { defaultValue: { summary: "none" } }
    },
    unit: {
      control: "text",
      description: "Different unit instead of percentage (%) inside the circle",
      table: { defaultValue: { summary: "%" } }
    },
    colorCircle: {
      control: "color",
      description: 'Bottom circle color Font "#ffff00", "brown", ...',
      table: { defaultValue: { summary: '"#00a1ff"' } }
    },
    stroke: {
      control: { type: "range", min: 1, max: 10, step: 1 },
      description: "Stroke width, chart thickness",
      table: { defaultValue: { summary: "10" } }
    },
    strokeBottom: {
      control: { type: "range", min: 1, max: 10, step: 1 },
      table: { defaultValue: { summary: "10" } }
    },
    round: {
      description: "Path rounding",
      table: { defaultValue: { summary: "false" } }
    },
    opacity: {
      control: { type: "number", min: 1, max: 10, step: 1 },
      description: "Opacity box-shadow, 10=1, 9=0.9 ... 1=0.1",
      table: { defaultValue: { summary: "10" } }
    },
    number: {
      description:
        "Add props number and set to false to hide the number with percent",
      table: { defaultValue: { summary: "true" } }
    },
    size: {
      control: { type: "range", min: 100, max: 300, step: 20 },
      description: "Size progress bar width and height in px",
      table: { defaultValue: { summary: "200" } }
    },
    speed: {
      control: { type: "range", min: 10, max: 1000, step: 10 },
      description: "Animation speed, 60fps by default",
      table: { defaultValue: { summary: "60" } }
    },
    rotation: {
      control: { type: "range", min: -360, max: 360 },
      description: "Chart rotation",
      table: { defaultValue: { summary: "-90" } }
    },
    cut: {
      control: { type: "range", min: 1, max: 100 },
      description: "Angle of the circle sector",
      table: { defaultValue: { summary: "30" } }
    },
    fontSize: {
      description: "Font size. The font can be shown in units rem, em, px ...",
      table: { defaultValue: { summary: '"1.6rem"' } }
    },
    fontWeight: {
      control: { type: "number", min: 100, max: 600, step: 100 },
      description: "[100, 200, ...]",
      table: { defaultValue: { summary: "400" } }
    },
    fontColor: {
      control: "color",
      description: 'Font color "#ffff00", "brown", ...',
      table: { defaultValue: { summary: '"#365b74"' } }
    },
    linearGradient: {
      description: 'Array of colors "lineargradient": "#ffff00", "brown", ...'
    },
    animationOff: {
      description: "Turning off the animation",
      table: { defaultValue: { summary: "false" } }
    },
    inverse: {
      description: "Counterclockwise animation",
      table: { defaultValue: { summary: "false" } }
    }
  },
  decorators: [
    (Story) => (
      <div style={styleObj}>
        <Story />
      </div>
    )
  ]
};

const hideRecord = {
  table: {
    disable: true
  }
};

CircularProgressBar.displayName = "CircularProgressBar";
const Template = (args) => <CircularProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  percent: 75,
  colorSlice: "#E91E63",
  stroke: 10,
  round: false,
  number: true,
  size: 200,
  speed: 1000,
  rotation: -90,
  cut: 0,
  fill: "none",
  inverse: false,
  fontSize: "1.6rem",
  fontWeight: 400,
  fontColor: "#365b74",
  fill: "none",
  animationOff: false
};

Default.argTypes = {
  linearGradient: hideRecord,
  colorCircle: hideRecord,
  strokeBottom: hideRecord
};

export const linearGradient = Template.bind({});
linearGradient.args = {
  percent: 70,
  round: true,
  fontWeight: 400,
  fontColor: "#365b74",
  colorCircle: "#e6e6e6",
  linearGradient: ["yellow", "#ff0000"],
  animationOff: false
};

linearGradient.argTypes = {
  colorSlice: hideRecord,
  opacity: hideRecord
};

export const Simple = Template.bind({});
Simple.args = {
  percent: 55,
  fontWeight: 100,
  fontColor: "#365b74",
  colorSlice: "#CDDC39",
  colorCircle: "#f1f1f1"
};

Simple.argTypes = {
  opacity: hideRecord,
  linearGradient: hideRecord
};

export const WithoutNumber = Template.bind({});
WithoutNumber.args = {
  percent: 60,
  colorSlice: "#000",
  colorCircle: "#e6e6e6",
  number: false
};

WithoutNumber.argTypes = {
  opacity: hideRecord,
  linearGradient: hideRecord
};

const TemplateImage = (args) => (
  <CircularProgressBar {...args}>
    <img
      src="https://picsum.photos/100/100"
      style={{
        width: "50px",
        borderRadius: "50%",
        marginTop: "-40px",
        padding: "2px",
        border: "3px solid #FF0000"
      }}
      alt="Random image"
    />
  </CircularProgressBar>
);

export const Image = TemplateImage.bind({});
Image.args = {
  percent: 67,
  colorSlice: "#FF0000",
  colorCircle: "#f1f1f1",
  textPosition: "1.5em",
  fontSize: "1rem",
  animationOff: false,
  fontWeight: 100,
  fontWeight: 400,
  stroke: 6,
  round: true
};

const TemplateImageWithText = (args) => (
  <CircularProgressBar {...args}>
    <img
      src="https://picsum.photos/100/100"
      style={{
        width: "50px",
        borderRadius: "50%",
        padding: "2px",
        border: "3px solid #ff8c69"
      }}
      alt="Random image"
    />
    <div style={{ textAlign: "center", fontSize: "1rem", padding: "0 40px" }}>
      Lorem ipsum dolor sit.
    </div>
  </CircularProgressBar>
);

export const ImageWithYourText = TemplateImageWithText.bind({});
ImageWithYourText.args = {
  percent: 75,
  colorSlice: "#ff8c69",
  colorCircle: "#f1f1f1",
  textPosition: "1.5em",
  number: false,
  animationOff: false,
  round: true,
  stroke: 6,
  strokeBottom: 6
};

export const Inverse = Template.bind({});
Inverse.args = {
  inverse: true,
  percent: 75
};

export const Cut = Template.bind({});
Cut.args = {
  cut: 30,
  percent: 75,
  rotation: 144,
  colorSlice: "#EC407A",
  colorCircle: "#f1f1f1",
  textPosition: "0.8em",
  fontSize: "1.1rem"
};

export const Fill = Template.bind({});
Fill.args = {
  fill: "#FFEBEE",
  percent: 60,
  stroke: 6,
  strokeBottom: 10,
  colorSlice: "#FF1744",
  colorCircle: "#FFEBEE",
  round: true
};

export const Unit = Template.bind({});
Unit.args = {
  id: 20,
  unit: "PL",
  percent: 75,
  stroke: 4,
  strokeBottom: 10,
  colorSlice: "#fff",
  colorCircle: "#F50057",
  fontSize: "1.2em",
  round: true
};
