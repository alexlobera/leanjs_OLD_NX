export const FONT_FAMILY = `font-family: 'Barlow', sans-serif;`

// export const reactBlue = (opacity = 1) => `rgba(111, 207, 240, ${opacity})` // #6FCFF0
export const reactBlue = (opacity = 1) => `rgba(97, 218, 251, ${opacity})` // #6FCFF0

export const blue1 = (opacity = 1) => `rgba(0,41,56, ${opacity})` // #002938

export const blue2 = (opacity = 1) => `rgba(87,178,212,${opacity})`

export const REACT_BLUE_DARK = '#57B2D4'

export const YELLOW = '#D6D100'

export const BROWN = '#979797'

export const GREY = '#c4c4c4'

export const GREY2 = '#4a4a4a'

export const WHITE = '#fff'

export const RED = 'red'

export const PINK = '#f388a2'

export const GRAPHQL_PINK = '#DF0098'

export const REACT_NATIVE_GREEN = '#80da8d'

export const CALLTOACTIONRED = '#C0392B'

export const BOX_SHADOW =
  'box-shadow: 0 -2px 24px 0 rgba(0, 0, 0, 0.24), 0 2px 24px 0 rgba(0, 0, 0, 0.12);'

export const MEETUP_RED = '#F64060'

export const TEXT_SIZE = ({ sm = false, lg = false }) => {
  if (sm) return `font-size: 12px;`
  if (lg) return `font-size: 18px;`

  return `font-size: 16px;`
}

export const Z_INDEX_TOP = 10
export const Z_INDEX_MEDIUM = 5
export const Z_INDEX_SMALL = 1
export const Z_INDEX_BG = -2

export const theme = {
  buttons: {
    primary: {
      color: WHITE,
      backgroundColor: CALLTOACTIONRED,
      fontWeight: 800,
    },
    secondary: {
      color: WHITE,
      backgroundColor: blue1(),
    },
    default: {
      color: GREY2,
      backgroundColor: WHITE,
      boxShadow:
        '0 2px 2px 0 rgba(0, 0, 0, 0.45), 0 0 2px 0 rgba(0, 0, 0, 0.12)',
      border: `solid 1px ${blue1()}`,
    },
  },
  flexboxgrid: {
    gutterWidth: 1,
    outerMargin: 0.5,
    container: {
      sm: null, // rem
      md: null, // rem
      lg: 64, // rem
    },
  },
  // design system:
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
    barlow: `'Barlow', sans-serif`,
  },
  fontSizes: [
    '0.8rem', // 0
    '0.9rem', // 1
    '1rem', // 2
    '1.25rem', // 3
    '1.563rem', // 4
    '1.953rem', // 5
    '2.441rem', // 6
    '2.77rem', // 7
  ],
  fontStyle: {
    normal: 'normal',
    italic: 'italic',
  },
  lineHeights: [
    '0', // 0
    '1.2rem', // 1
    '1.5rem', // 2
    '1.87rem', // 3
    '2rem', // 4
    '2.5rem', // 5
    '3rem', // 6
  ],
  fontWeights: {
    normal: '400',
    bold: '800',
  },
}
