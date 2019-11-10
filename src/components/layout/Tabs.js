import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import { BLUE } from '../../config/styles'
import {
  SCREEN_XS_MAX,
  SCREEN_SM_MIN,
  selectTypeColor,
  selectBorderStyle,
} from '../utils'
import { Col, Row } from './Grid'
import Box from './Box'

const Ul = styled(Box)`
  a {
    cursor: pointer;
  }
  > li {
    list-style-type: none;
    display: inline-block;
    span,
    a {
      display: block;
      ${space({ p: 2 })}
    }
  }

  @media (min-width: ${SCREEN_SM_MIN}) {
    li {
      ${space({ mx: 2 })}
      :last-child {
        margin-right: 0;
      }

      :first-child {
        margin-left: 0;
      }
    }
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    li {
      display: block;
    }
  }
`
Ul.defaultProps = {
  box: 'ul',
  p: 0,
  m: 0,
  mb: 4,
}

export const TabList = ({ active, setActive, onChange, children, ...rest }) => {
  const compound = React.Children.map(children, child =>
    React.cloneElement(child, {
      isActive: child.props.name === active,
      onClick: child.props.name
        ? () => {
            onChange && onChange(child.props.name)
            setActive(child.props.name)
          }
        : undefined,
    })
  )
  return (
    <Row>
      <Col {...rest} md={11}>
        <Ul {...rest}>{compound}</Ul>
      </Col>
    </Row>
  )
}

TabList.displayName = 'TabList'

const A = styled.a.attrs({ className: props => props.className })`
  ${props =>
    props.isActive
      ? `
      @media (min-width: ${SCREEN_SM_MIN}) {
        position:relative;
        text-align:center;
      }
      @media (max-width: ${SCREEN_XS_MAX}) {
        border: 1px solid ${BLUE};
      }
      background: ${selectTypeColor(props.name)};
    `
      : ''};
  ${props =>
    `border-bottom: 3px ${selectBorderStyle(props.name)} ${selectTypeColor(
      props.name
    )}`};
  ${props => {
    if (
      props.isActive &&
      props.name &&
      props.name.toLowerCase().indexOf('graphql') > -1
    ) {
      return `color: white !important`
    }
  }};
`

export const TabItem = ({
  children,
  isActive,
  onClick,
  name,
  component,
  className = 'courses training-curriculum-clicks',
  ...props
}) => {
  return (
    <li name={name}>
      <A
        role="button"
        isActive={isActive}
        name={name}
        {...props}
        onClick={e => {
          e.preventDefault()
          onClick && onClick()
        }}
        className={className}
      >
        {children}
      </A>
    </li>
  )
}
TabItem.displayName = 'TabItem'

export const TabContent = ({ active, children }) =>
  React.Children.map(children, child =>
    React.cloneElement(child, {
      isActive: child.props.name === active,
    })
  )

TabContent.displayName = 'TabContent'

export const ContentItem = ({ isActive, children }) =>
  isActive ? children : null

ContentItem.displayName = 'ContentItem'

export class Tabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: props.defaultValue || props.active,
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
        onChange: onChange || this.setActive,
      })
    )
  }
}

export default Tabs
