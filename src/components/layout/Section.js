import React from 'react'
import styled from 'styled-components'
import { SCREEN_SM_MIN } from '../utils'
import { BOX_SHADOW, WHITE } from '../../styles'

const Section = styled.section`
  padding-top: ${props => (props.top ? '150px' : '60px')};
  ${props => (props.top ? 'margin-top: -85px;' : '')} padding-bottom: 60px;
  background-color: ${props => {
    switch (props.color) {
      case 'lightGrey':
        return '#eee'
    }
  }};
`

export const TopSection = styled(Section)`
  @media (min-width: ${SCREEN_SM_MIN}) {
    margin-top: -125px;
  }
`

export const TopSectionBox = styled.div`
  ${BOX_SHADOW};
  padding: 80px 0 50px;
  background-color: ${WHITE};
`

export default Section
