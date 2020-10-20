export const FONT_FAMILY = `font-family: 'Barlow', sans-serif;`;

export const BLUE = `rgba(97, 218, 251, 1)`;
export const BLUE_04 = `rgba(97, 218, 251, 0.4)`;
export const DARK_BLUE = `rgba(0,41,56, 1)`;
export const DARK_BLUE_075 = `rgba(0,41,56, 0.75)`;
export const LIGHT_BLUE = `rgba(87,178,212,0.9)`;
export const YELLOW = '#FDEB33';
export const BROWN = '#979797';
export const GREY = '#c4c4c4';
export const DARK_GREY = '#4a4a4a';
export const WHITE = '#fff';
export const PINK = '#f388a2';
export const GRAPHQL_PINK = '#DF0098';
export const JAMSTACK_GREEN = '#01b5a6';
export const LIGHT_PINK = 'rgba(223, 0, 152, 0.8)';
export const GREEN = '#80da8d';
export const MEETUP_RED = '#F64060';
export const RED = '#C0392B';

export const theme = {
  flexboxgrid: {
    gutterWidth: 1,
    outerMargin: 0.5,
    container: {
      sm: null, // rem
      md: null, // rem
      lg: 64, // rem
    },
  },
  // design system
  breakpoints: ['40em', '52em', '64em'],
  colors: {
    text: DARK_GREY,
    lightText: WHITE,
    background: WHITE,
    darkBackground: DARK_BLUE,
    primary: YELLOW,
    secondary: DARK_BLUE,
    danger: PINK,
    react: BLUE,
  },
  space: [
    '0rem', // 0
    '0.625rem', // 1
    '0.9rem', // 2
    '1rem', // 3
    '1.5rem', // 4
    '2rem', // 5
    '3rem', // 6
    '4rem', // 7
  ],
  fonts: {
    body: `'Barlow', sans-serif`,
  },
  fontShadows: {
    light: '0 18px 29px -2px rgba(0, 0, 0, 0.26)',
  },
  fontSizes: [
    '0.8rem', // 0
    '0.9rem', // 1
    '1rem', // 2
    '1.15rem', // 3
    '1.25rem', // 4
    '1.563rem', // 5
    '1.953rem', // 6
    '2.441rem', // 7
    '2.77rem', // 8
  ],
  fontStyle: {
    normal: 'normal',
    italic: 'italic',
  },
  lineHeights: [
    '0', // 0
    '1.2rem', // 1
    '1.5rem', // 2
    '1.845rem', // 3
    '2rem', // 4
    '2.5rem', // 5
    '3rem', // 6
  ],
  fontWeights: {
    normal: '400',
    bold: '800',
  },
  shadows: {
    thin: '0 2px 2px 0 rgba(0, 0, 0, 0.45), 0 0 2px 0 rgba(0, 0, 0, 0.12)',
    light: '0 18px 29px -2px rgba(0, 0, 0, 0.26)',
    bold: 'rgb(74, 74, 74) 0px 0px 1px',
    box: '0 -2px 24px 0 rgba(0, 0, 0, 0.24), 0 2px 24px 0 rgba(0, 0, 0, 0.12)',
  },
};
