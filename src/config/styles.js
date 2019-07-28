export const FONT_FAMILY = `font-family: 'Barlow', sans-serif;`

export const BLUE = `rgba(97, 218, 251, 1)` // #6FCFF0

export const BLUE_04 = `rgba(97, 218, 251, 0.4)` // #6FCFF0

export const DARK_BLUE = `rgba(0,41,56, 1)` // #002938

export const DARK_BLUE_075 = `rgba(0,41,56, 0.75)`

export const LIGHT_BLUE = `rgba(87,178,212,0.9)` // '#57B2D4'

export const YELLOW = '#D6D100'

export const BROWN = '#979797'

export const GREY = '#c4c4c4'

export const DARK_GREY = '#4a4a4a'

export const WHITE = '#fff'

export const PINK = '#f388a2'

export const GRAPHQL_PINK = '#DF0098'

export const GREEN = '#80da8d'

export const MEETUP_RED = '#F64060'

export const RED = '#C0392B'

export const TEXT_SIZE = ({ sm = false, lg = false }) => {
  if (sm) return `font-size: 12px;`
  if (lg) return `font-size: 18px;`

  return `font-size: 16px;`
}

export const Z_INDEX_TOP = 999
export const Z_INDEX_MEDIUM = 5
export const Z_INDEX_SMALL = 1
export const Z_INDEX_BG = -2

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
  fontShadows: {
    light: '0 18px 29px -2px rgba(0, 0, 0, 0.26)',
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
  shadows: {
    thin: '0 2px 2px 0 rgba(0, 0, 0, 0.45), 0 0 2px 0 rgba(0, 0, 0, 0.12)',
    light: '0 18px 29px -2px rgba(0, 0, 0, 0.26)',
    bold: 'rgb(74, 74, 74) 0px 0px 1px',
  },
}
