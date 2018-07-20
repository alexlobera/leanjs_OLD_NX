import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding-top: ${props => (props.top ? '150px' : '60px')};
  ${props => (props.top ? 'margin-top: -85px' : '')} padding-bottom: 60px;
  background-color: ${props => {
    switch (props.color) {
      case 'lightGrey':
        return '#eee'
    }
  }};
`

export default Section
