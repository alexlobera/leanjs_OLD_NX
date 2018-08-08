import React from 'react'
import styled from 'styled-components'

import Ul from '../layout/Ul'
import { reactBlue, FONT_FAMILY } from '../../config/styles'

const TabContainer = styled(Ul)`
  margin: 0 0 32px 0;
  padding: 0;
  > li {
    list-style-type: none;
    display: inline-block;
    margin: 0 8px;
    :first-child {
      margin-left: 0;
      a, span {
        padding-left: 0;
      }
    }
    :last-child {
      margin-right: 0;
    }
    span,
    a {
      padding: 8px;
      ${FONT_FAMILY}
    }
  }
`

const TabLi = styled.li`
  ${props =>
    props.active
      ? `
        position:relative;
        text-align:center;
        a::after {
            height: 3px;
            display: block;
            width: 100%;
            background: ${reactBlue()};
            border-right: 3px red;
            content: '';
            position: absolute;
            bottom:-10px;
            left:0;
        }
    `
      : ''};
`

export const TabItem = ({ children, active, ...props }) => (
  <TabLi active={active}>
    <a {...props}>{children}</a>
  </TabLi>
)

export const TabLabel = ({ children, ...props }) => (
  <TabLi><span {...props}>{children}</span></TabLi>
)

class Tabs extends React.Component {
  state = {
    active: null,
  }

  render() {
    const { active } = this.state
    const newChildren = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        active: child.props.name === active || (!active && child.props.default),
      })
    )

    return <TabContainer>{newChildren}</TabContainer>
  }
}

export default Tabs
