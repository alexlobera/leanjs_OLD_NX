import React from 'react'
import styled from 'styled-components'
import { FONT_FAMILY, BLUE } from '../../config/styles'
import { SCREEN_MD_MIN, SCREEN_SM_MAX } from '../utils'

const HORIZONTAL_TRIANGLE = `
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-width: 18px;
  margin-top: 18px;
  border-color: rgba(136, 183, 213, 0);
  top: 0;
`

const VERTICAL_TRIANGLE = `
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(136, 183, 213, 0);
  border-width: 18px;
  border-top-color:${BLUE};
  top: 100%;
  margin-top: -1px;
`

const Blockquote = ({ children, ...rest }) => (
  <blockquote {...rest}>"{children}"</blockquote>
)

const StyledBlockquote = styled(Blockquote)`
  ${FONT_FAMILY} margin: 0;
  position: relative;
  padding: 0;
  ${props => {
    if (props.triangle === 'left') {
      return ` 
      @media (min-width: ${SCREEN_MD_MIN}) {
          :after {
          ${HORIZONTAL_TRIANGLE}
          right: 100%;
          border-right-color: ${BLUE};
        }
      }
      @media (max-width: ${SCREEN_SM_MAX}) {
        :after {
          ${VERTICAL_TRIANGLE}
          right: 0;
          margin-right: 36px;
        }
      }
      `
    } else if (props.triangle === 'right') {
      return `
      @media (min-width: ${SCREEN_MD_MIN}) {
        :after {
          ${HORIZONTAL_TRIANGLE}
          left: 100%;
          border-left-color: ${BLUE};
        }
      }
      @media (max-width: ${SCREEN_SM_MAX}) {
        :after {
          ${VERTICAL_TRIANGLE}
          margin-left: 36px;
          left: 0;
        }
      }
      `
    }
  }} ${props => {
    if (props.bg === 'primary') {
      return `
        padding: 24px;
        background-color: ${BLUE};
        font-size: 0.9rem;
        font-style: italic;
      `
    }
  }};
`

export default StyledBlockquote
