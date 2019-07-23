import { styleChildLinkColor } from '../navigation/Link'
export { H1, H1Ref, H2, H2Ref, H3, H4, H5 } from './H'
export { default as Blockquote } from './Blockquote'
export { default as Label } from './Label'
export { default as P } from './P'
export { default as Span } from './Span'
export { default as Hr } from './Hr'
export const fontColor = color => `
  color: ${color};
  h2, h3, h4, h5, p, span, ul, li {
    color: ${color};
  }
  ${styleChildLinkColor(color)}
`
