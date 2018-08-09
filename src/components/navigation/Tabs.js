import React from 'react'
import styled from 'styled-components'

import { reactBlue, FONT_FAMILY } from '../../config/styles'
import { SCREEN_XS_MAX, SCREEN_SM_MIN } from '../utils'

const Ul = styled.ul`
  margin: 0 0 32px 0;
  padding: 0;
  a {
    cursor: pointer;
  }
  > li {
    list-style-type: none;
    display: inline-block;
    margin: 0 8px;
    :first-child {
      margin-left: 0;
      a,
      span {
        padding-left: 0;
      }
    }
    span,
    a {
      display: block;
      padding: 8px;
      ${FONT_FAMILY};
    }
  }

  @media (min-width: ${SCREEN_SM_MIN}) {
    li {
      :last-child {
        margin-right: 0;
      }
    }
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    li {
      padding: 5px;
      display: block;
    }
  }
`

export const TabList = ({ active, setActive, onChange, children }) => (
  <Ul>
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        active: child.props.name === active, //|| (!active && child.props.default),
        onClick: child.props.name
          ? () => {
              onChange && onChange(child.props.name)
              setActive(child.props.name)
            }
          : undefined,
      })
    )}
  </Ul>
)

TabList.displayName = 'TabList'

const Li = styled.li`
  ${props =>
    props.active
      ? `
      @media (min-width: ${SCREEN_SM_MIN}) {
        position:relative;
        text-align:center;
        a::after {
            height: 3px;
            display: block;
            width: 100%;
            background: ${reactBlue()};
            content: '';
            position: absolute;
            bottom:-10px;
            left:0;
        }
      }
      @media (max-width: ${SCREEN_XS_MAX}) {
        border: 1px solid ${reactBlue()}
      }
    `
      : ''};
`

export const TabItem = ({ children, active, onClick, ...props }) => (
  <Li active={active}>
    <a {...props} onClick={onClick}>
      {children}
    </a>
  </Li>
)
TabItem.displayName = 'TabItem'

export const TabLabel = ({ children, ...props }) => (
  <Li>
    <span {...props}>{children}</span>
  </Li>
)
TabLabel.displayName = 'TabLabel'

export const TabContent = ({ active, children }) =>
  React.Children.map(children, child =>
    React.cloneElement(child, {
      active: child.props.name === active,
    })
  )

TabContent.displayName = 'TabContent'

export const ContentItem = ({ active, children }) => (active ? children : null)

ContentItem.displayName = 'ContentItem'

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: props.default || props.active,
    }
  }

  setActive = active => {
    this.setState({ active })
  }

  render() {
    const { active } = this.state
    const { setActive } = this
    const { onChange, active: activeProp } = this.props

    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        active: activeProp || active,
        setActive,
        onChange,
      })
    )
  }
}

export default Tabs
