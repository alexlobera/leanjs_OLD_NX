import React from 'react';

export const EXTRA_LARGE = 4,
  LARGE = 3,
  MEDIUM = 2,
  SMALL = 1,
  EXTRA_SMALL = 0,
  defaultExtraLargeWidth = 1200,
  defaultLargeWidth = 992,
  defaultMediumWidth = 768,
  defaultSmallWidth = 576,
  defaultResizeInterval = 166;

export class Width extends React.Component {
  constructor(props, context) {
    super(props);
    const {
      extraLargeWidth,
      largeWidth,
      mediumWidth,
      smallWidth,
      resizeInterval,
    } = context ? context.width || {} : {};
    this.handleResize = this.handleResize.bind(this);
    this.updateWidth = this.updateWidth.bind(this);

    this.state = { width: null };
    this.deferTime = null;
    this.extraLargeWidth =
      props.extraLargeWidth || extraLargeWidth || defaultExtraLargeWidth;
    this.largeWidth = props.largeWidth || largeWidth || defaultLargeWidth;
    this.mediumWidth = props.mediumWidth || mediumWidth || defaultMediumWidth;
    this.smallWidth = props.smallWidth || smallWidth || defaultSmallWidth;
    this.resizeInterval =
      props.resizeInterval || resizeInterval || defaultResizeInterval;
  }

  componentDidMount() {
    if (window) window.addEventListener('resize', this.handleResize);
    this.updateWidth();
  }

  componentWillUnmount() {
    if (window) window.removeEventListener('resize', this.handleResize);
    clearTimeout(this.deferTime);
  }

  handleResize() {
    clearTimeout(this.deferTime);
    this.deferTime = setTimeout(() => {
      this.updateWidth();
    }, this.resizeInterval);
  }

  updateWidth() {
    let innerWidth = 0;
    let width;
    if (window) innerWidth = window.innerWidth;

    if (innerWidth >= this.extraLargeWidth) {
      width = EXTRA_LARGE;
    } else if (innerWidth >= this.largeWidth) {
      width = LARGE;
    } else if (innerWidth >= this.mediumWidth) {
      width = MEDIUM;
    } else if (innerWidth >= this.smallWidth) {
      width = SMALL;
    } else {
      width = EXTRA_SMALL;
    }

    if (width !== this.state.width) {
      this.setState({
        width,
      });
    }
  }

  render() {
    return this.props.children(this.state.width);
  }
}

const withWidth = (options = {}) => (OuterComponent) => {
  const {
    extraLargeWidth,
    largeWidth,
    mediumWidth,
    smallWidth,
    resizeInterval,
  } = options;

  class WithWidth extends Width {
    constructor(props, context) {
      super(props, context);
      const width = context ? context.width || {} : {};
      this.extraLargeWidth =
        extraLargeWidth || width.extraLargeWidth || defaultExtraLargeWidth;
      this.largeWidth = largeWidth || width.largeWidth || defaultLargeWidth;
      this.mediumWidth = mediumWidth || width.mediumWidth || defaultMediumWidth;
      this.smallWidth = smallWidth || width.smallWidth || defaultSmallWidth;
      this.resizeInterval =
        resizeInterval || width.resizeInterval || defaultResizeInterval;
    }

    render() {
      return <OuterComponent {...this.props} width={this.state.width} />;
    }
  }

  return WithWidth;
};

export default withWidth;
