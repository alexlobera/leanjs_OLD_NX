import { Ul } from '@leanjs/ui-core';

export { Ul, Li } from '@leanjs/ui-core';
export default Ul;

// import React from "react"
// import styled from "styled-components"
// import {
//   FONT_FAMILY,
//   WHITE,
//   SPACING_SMALL,
//   SPACING_STANDARD,
//   SPACING_MEDIUM,
// } from "../../config/styles"

// const getPadding = props => {
//   const y = props.wide ? SPACING_STANDARD : SPACING_SMALL
//   const x = {
//     big: props.wide ? SPACING_MEDIUM : SPACING_STANDARD,
//     std: props.wide ? SPACING_STANDARD : SPACING_SMALL,
//   }
//   const left = props.flushLeft ? 0 : x.std
//   const right = props.flushLeft ? x.big : x.std

//   return `${y} ${right} ${y} ${left}`
// }

// const allowUnstyled = props =>
//   props.unstyled
//     ? `
//     margin-left: 0;
//     > li {
//       list-style-type: none;
//     }
// `
//     : ``

// const allowInline = props =>
//   props.inline
//     ? `
//   display:inline-block;
//   margin: 0;
//   padding: 0;
//   ${props.right ? `float:right;` : ``}
//   > li {
//     display: inline-block;
//     padding: ${getPadding(props)};
//     margin-bottom:0;
//     :first-child {
//       padding-left: 0;
//     }
//     :last-child {
//       padding-right: 0;
//     }
//   }
// `
//     : ``

// const Ul = styled.ul`
//   margin-top: 15px;
//   ${allowUnstyled};
//   ${allowInline};
// `

// const Li = styled.li`
//   ${FONT_FAMILY};
// `

// export { Ul, Li }
// export default Ul
