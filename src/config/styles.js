export const FONT_FAMILY = `font-family: 'Barlow', sans-serif;`

export const reactBlue = (opacity = 1) => `rgba(111, 207, 240, ${opacity})` // #6FCFF0

export const blue1 = (opacity = 1) => `rgba(0,41,56, ${opacity})` // #002938

export const BROWN = '#979797'

export const GREY = '#c4c4c4'

export const GREY2 = '#4a4a4a'

export const WHITE = '#fff'

export const CALLTOACTIONRED = '#be6045'

export const BOX_SHADOW =
  'box-shadow: 0 -2px 24px 0 rgba(0, 0, 0, 0.24), 0 2px 24px 0 rgba(0, 0, 0, 0.12);'

export const TEXT_SIZE = ({ sm = false, lg = false }) => {
  if (sm) return `font-size: 12px;`
  if (lg) return `font-size: 18px;`

  return `font-size: 16px;`
}
