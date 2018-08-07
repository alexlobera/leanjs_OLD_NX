import React from 'react'
import styled, { css } from 'styled-components'
import { SCREEN_SM_MIN, SCREEN_XS_MAX } from '../utils'
import { blue1, GREY2 } from '../../config/styles'

const Section = styled.section`
  padding-top: ${props => (props.top ? '50px' : '30px')};
  padding-bottom: 30px;
  p:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  ${props => {
    if (props.xsBgDark) {
      return css`
        @media (max-width: ${SCREEN_XS_MAX}) {
          background-color: ${blue1()};
        }
      `
    } else if (props.xsBgDarkGrey) {
      return css`
        @media (max-width: ${SCREEN_XS_MAX}) {
          background-color: ${GREY2};
        }
      `
    }
  }};
`

Section.displayName = 'Section'

export const TopSection = styled(Section)`
  position: relative;
  @media (min-width: ${SCREEN_SM_MIN}) {
    margin-top: -125px;
  }
`

TopSection.displayName = 'TopSection'

export default Section
