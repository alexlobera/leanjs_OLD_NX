const heading = {
  color: 'text',
  fontFamily: 'heading',
  lineHeight: 'heading',
  mt: 0,
};

export const theme = {
  space: [
    '0', // 0
    '0.25rem', // 1
    '0.5rem', // 2
    '0.75rem', // 3
    '1rem', // 4
    '1.25rem', // 5
    '1.5rem', // 6
    '2rem', // 7
    '3rem', // 8
    '4rem', // 9
    '5rem', // 10
    '6rem', // 11
    '8rem', // 12
    '10rem', // 13
    '12rem', // 14
    '14rem', // 15
    '16rem', // 16
  ],
  breakpoints: ['40em', '52em', '64em'],
  fonts: {
    body: `'Barlow', sans-serif`,
    heading: 'inherit',
    monospace: 'Courier New,Courier,monospace;',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    bold: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#4a4a4a',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
  },
  sizes: {
    container: '64rem',
  },
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  fontShadows: {
    light: '0 18px 29px -2px rgba(0, 0, 0, 0.26)',
  },
  shadows: {
    thin: '0 2px 2px 0 rgba(0, 0, 0, 0.45), 0 0 2px 0 rgba(0, 0, 0, 0.12)',
    light: '0 18px 29px -2px rgba(0, 0, 0, 0.26)',
    bold: 'rgb(74, 74, 74) 0px 0px 1px',
    box: '0 -2px 24px 0 rgba(0, 0, 0, 0.24), 0 2px 24px 0 rgba(0, 0, 0, 0.12)',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      ...heading,
      fontSize: 6,
      fontWeight: 'bold',
    },
    h2: {
      ...heading,
      fontWeight: 'bold',
      fontSize: 5,
      mb: 8,
    },
    h3: {
      ...heading,
      fontSize: 4,
      mb: 7,
    },
    h4: {
      ...heading,
      fontSize: 3,
      mb: 6,
    },
    h5: {
      ...heading,
      fontSize: 3,
      mb: 5,
    },
    h6: {
      ...heading,
      fontSize: 2,
      mb: 4,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'text',
      '&:link': {
        color: 'text',
      },
      '&:visited': {
        color: 'text',
      },
      '&:active': {
        color: 'text',
      },
      '&:hover': {
        color: 'text',
      },
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
  sections: {
    top: {
      pt: 0,
      mt: '-50px',
    },
  },
};

export default theme;
