"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Text = function Text(_ref) {
  var counter = _ref.counter,
      fontSize = _ref.fontSize,
      fontWeight = _ref.fontWeight;
  return /*#__PURE__*/_react.default.createElement("text", {
    x: "50%",
    y: "50%",
    fontSize: fontSize,
    fontWeight: fontWeight,
    fill: "#365b74",
    textAnchor: "middle",
    dominantBaseline: "central"
  }, counter, "%");
};

var CircleBackground = function CircleBackground(_ref2) {
  var stroke = _ref2.stroke,
      colorCircle = _ref2.colorCircle;
  return /*#__PURE__*/_react.default.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "42",
    shapeRendering: "geometricPrecision",
    fill: "none",
    stroke: colorCircle,
    strokeWidth: stroke
  });
};

var CircleTop = function CircleTop(props) {
  var linearGradient = props.linearGradient,
      counter = props.counter,
      stroke = props.stroke,
      round = props.round,
      colorSlice = props.colorSlice;
  var dasharray = counter * 2.64 + ', 20000';
  var gradient = linearGradient !== undefined ? "url(#linear-gradient)" : colorSlice;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, linearGradient && /*#__PURE__*/_react.default.createElement(GradientLinear, {
    linearGradient: linearGradient
  }), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "42",
    shapeRendering: "geometricPrecision",
    fill: "none",
    transform: "rotate(-90, 50, 50)",
    stroke: gradient,
    strokeWidth: stroke,
    strokeLinecap: round ? 'round' : '',
    strokeDasharray: dasharray,
    "data-angel": counter
  }));
};

var GradientLinear = function GradientLinear(_ref3) {
  var linearGradient = _ref3.linearGradient;
  var number = -100;
  return /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "linear-gradient"
  }, linearGradient.map(function (gradient, index) {
    number += 100;
    return /*#__PURE__*/_react.default.createElement("stop", {
      key: index,
      offset: number / (linearGradient.length - 1) + '%',
      stopColor: gradient
    });
  })));
};

var hex2rgb = function hex2rgb(hex) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var c = typeof hex === 'string' ? parseInt(hex.replace('#', ''), 16) : hex;
  return "rgba(".concat(c >> 16, ", ").concat((c & 0xff00) >> 8, ", ").concat(c & 0xff, ", ").concat(opacity / 100, ")");
};

var CircularProgressBar = function CircularProgressBar(props) {
  var percent = props.percent,
      number = props.number,
      stroke = props.stroke,
      colorSlice = props.colorSlice,
      colorCircle = props.colorCircle,
      opacity = props.opacity,
      size = props.size;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      counter = _useState2[0],
      setCounter = _useState2[1];

  (0, _react.useEffect)(function () {
    var request;

    var performAnimation = function performAnimation() {
      if (counter >= percent) return;
      setCounter(function (x) {
        return x + 1;
      });
      request = requestAnimationFrame(performAnimation);
    };

    request = requestAnimationFrame(performAnimation);
    return function () {
      return cancelAnimationFrame(request);
    };
  });

  var styleObj = function styleObj(colorCircle) {
    var boxShadow = colorCircle === undefined ? "inset 0px 0px ".concat(stroke, "px ").concat(stroke, "px ").concat(hex2rgb(colorSlice, opacity)) : '';
    return {
      width: size,
      height: size,
      borderRadius: '50%',
      boxShadow: boxShadow
    };
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: styleObj(colorCircle)
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100"
  }, number && /*#__PURE__*/_react.default.createElement(Text, _extends({
    counter: counter
  }, props)), /*#__PURE__*/_react.default.createElement(CircleBackground, _extends({
    counter: counter
  }, props)), /*#__PURE__*/_react.default.createElement(CircleTop, _extends({
    counter: counter
  }, props))));
};

CircularProgressBar.propTypes = {
  percent: _propTypes.default.number.isRequired,
  colorSlice: _propTypes.default.string,
  colorCircle: _propTypes.default.string,
  stroke: _propTypes.default.number,
  round: _propTypes.default.bool,
  opacity: _propTypes.default.number,
  number: _propTypes.default.bool,
  size: _propTypes.default.number,
  fontSize: _propTypes.default.string,
  fontWeight: _propTypes.default.number,
  fontColor: _propTypes.default.string,
  linearGradient: _propTypes.default.array
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
  fontWeight: 400
};
var _default = CircularProgressBar;
exports.default = _default;