## v1.1.0 (2022-01-03)

### Changed
- updating accessibility, change role from `img` to `progressbar`
- adding `aria-valuenow`, `aria-valuemin` and `aria-valuemax` attributes

### Fixed
- test width `strokeDasharray`

## v1.0.25 (2021-10-21)

### Added
- `animationSmooth` - new props, The [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) property allows you to create animations (a smooth transition effect). 
### Changed

- `role=img` to `role=progressbar` - [progressbar role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role)

## v1.0.24 (2021-09-27)

### Changed

- rebuilded presentation examples 

## v1.0.23 (2021-09-24)

### Added

- 'strokeDasharray' - added to the lower circle
- more examples to storybook

## v0.1.22 (2021-08-23)

### Changed

- a separate element for a digits (tspan - `circular-percent-x`)
- the color of the `text` element to `#000`
- updated style storybook `unit`
- upgrating storybook to 6.3.7

## v0.1.21 (2021-08-20)

### Added

- `unit` - different unit instead of percentage (%) inside the circle
- `fill` - inner circle color, defaults `fill: "none"`

## v0.1.19 (2021-08-19)

### Added

- `cut` - angle of the circle sector
- `rotation` - chart rotation
