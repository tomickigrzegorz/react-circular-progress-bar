<h1 align="center">
  react-circular-progress-bar
</h1>

<p align="center">
  Simple circular progress bar.
</p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/tomik23/react-circular-progress-bar">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green.svg">
  </a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/tomik23/react-circular-progress-bar/main/circular-progress-bar.png">
</p>


## Install

```bash
yarn add @tomik23/react-circular-progress-bar
# or
npm install @tomik23/react-circular-progress-bar
```

## Usage
```jsx
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar'
```

```jsx
const props = {
  percent: 60, // is require
  colorSlice: '#00a1ff',
  colorCircle: '#00a1ff',
  stroke: 10,
  round: true,
  opacity: 10,
  number: true,
  size: 200,
  fontColor: '#365b74',
  fontSize: '1.6rem',
  fontWeight: 400,
  linearGradient: ["#ffff00", "brown"]
}

<CircularProgressBar {...props} />
```

## Configuration of the plugin

props | type | default | require | description
---- | :-------: | :-------: | :--------: | -----------
percent | number |  | ✔ | Represents the progress bar and animation of the animation progress expressed by a number e.g. 65%
colorSlice | string | `'#00a1ff'` | | Progress layer color and background ["#ffff00","brown" *](#colors-names)
colorCircle | string | `'#00a1ff'` | | Bottom circle color Font ["#ffff00","brown" *](#colors-names)
stroke | number | `10` |  | Stroke width, chart thickness
round | boolean | `false` |  | Path rounding
opacity | number | `10` |  | Opacity box-shadow, 10 = 1s, 9 = 0.9 ... 1 = 0.1
number | boolean | `true` |  | Add props number and set to false to hide the number with percent
size | number | `200` |  | Size progress bar width and height in px
fontSize | string | `1.6rem` |  | Font size. The font can be shown in units rem, em, px ...
fontWeight | number | `400` |  | [number, normal, bold, bolder, lighter]
fontColor | string | `'#365b74'` |  | Font color ["#ffff00","brown" *](#colors-names)
linearGradient | array |  |  | Array of colors "lineargradient": ["#ffff00","brown" *](#colors-names)

## Colors names

[* See colors names](https://htmlcolorcodes.com/color-names/)

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png" alt="Vivaldi" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Vivaldi |
| --------- | --------- | --------- | --------- | --------- |
| IE11+, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions