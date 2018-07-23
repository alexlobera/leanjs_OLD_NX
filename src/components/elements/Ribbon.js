import React from 'react'
import styled from 'styled-components'

// const StyledRibbon = styled.div`
//   position: relative;
//   > div {
//     position: absolute;
//     top: -30px;
//     right: -16px;
//     overflow: visible;
//     font-size: 0.7em;
//     line-height: 0.7em;
//   }

//   > div:before {
//     content: '';
//     height: 0;
//     width: 0;
//     display: block;
//     position: absolute;
//     top: 3px;
//     left: 0;
//     border-top: 20px solid rgba(0, 0, 0, 0.3);
//     /* These 4 border properties create the first part of our drop-shadow */
//     border-bottom: 20px solid rgba(0, 0, 0, 0.3);
//     border-right: 20px solid rgba(0, 0, 0, 0.3);
//     border-left: 20px solid transparent;
//   }

//   > div span:before {
//     content: '';
//     height: 0;
//     width: 0;
//     display: block;
//     position: absolute;
//     top: 0;
//     left: -20px;
//     border-top: 20px solid #555;
//     border-bottom: 20px solid #555;
//     border-right: 20px solid transparent;
//     border-left: 20px solid transparent;
//   }

//   > div span:after {
//     content: '';
//     height: 0;
//     width: 0;
//     display: block;
//     position: absolute;
//     bottom: -10px;
//     right: 0;
//     border-top: 10px solid #333;
//     border-right: 10px solid transparent;
//   }

//   > div:after {
//     content: '';
//     height: 3px;
//     background: rgba(0, 0, 0, 0.3);
//     display: block;
//     position: absolute;
//     bottom: -3px;
//     left: 40px;
//     right: 3px;
//   }

//   > div span {
//     display: block;
//     padding: 14px;
//     position: relative;
//     background: #555;
//     overflow: visible;
//     height: 40px;
//     margin-left: 20px;
//     color: #fff;
//     text-decoration: none;
//   }
// `

// const Ribbon = ({ children }) => (
//   <StyledRibbon>
//     <div>
//       <span>{children}</span>
//     </div>
//   </StyledRibbon>
// )

export default styled.div`
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.45), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  border: solid 1px #002938;
  padding: 2px 15px;
  display: inline-block;
  position: absolute;
  top: 30px;
  right: -5px;
`
