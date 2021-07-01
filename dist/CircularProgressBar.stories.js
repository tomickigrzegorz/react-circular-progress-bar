"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linearGradient = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CircularProgressBar = _interopRequireDefault(require("./CircularProgressBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleObj = {
  display: 'flex',
  justifyContent: 'center',
  padding: '40px',
  fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji'
};
var _default = {
  title: 'Example/CircularProgressBar',
  component: _CircularProgressBar.default,
  decorators: [function (Story) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styleObj
    }, /*#__PURE__*/_react.default.createElement(Story, null));
  }]
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_CircularProgressBar.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  percent: 50
};
var linearGradient = Template.bind({});
exports.linearGradient = linearGradient;
linearGradient.args = {
  percent: 70,
  round: true,
  colorSlice: "#4CAF50",
  colorCircle: "#e6e6e6",
  linearGradient: ["yellow", "#ff0000"]
};