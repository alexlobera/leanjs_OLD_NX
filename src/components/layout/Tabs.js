import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import { BLUE, FONT_FAMILY } from '../../config/styles'
import {
  SCREEN_XS_MAX,
  SCREEN_SM_MIN,
  selectTypeColor,
  selectBorderStyle,
} from '../utils'
import {
  GRAPHQL_API,
  GRAPHQL_CLIENT,
  GRAPHQL_WORKSHOP,
  GRAPHQL_BOOTCAMP,
} from '../../config/data'
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
      <Col {...rest}>
        <Ul {...rest}>{compound}</Ul>
      </Col>
    </Row>
  )
}

TabList.displayName = 'TabList'

const A = styled.a`
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
      (props.name === GRAPHQL_BOOTCAMP ||
        props.name === GRAPHQL_API ||
        props.name === GRAPHQL_CLIENT ||
        props.name === GRAPHQL_WORKSHOP)
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
  ...props
}) => {
  const Component = component || A
  return (
    <li name={name}>
      <Component
        isActive={isActive}
        name={name}
        {...props}
        onClick={e => {
          e.preventDefault()
          onClick && onClick()
        }}
      >
        {children}
      </Component>
    </li>
  )
}
TabItem.displayName = 'TabItem'

export const TabContent = ({
  active,
  children,
  // wrapperComponent: WrapperComponent,
  // ...rest
}) => {
  return React.Children.map(children, child =>
    React.cloneElement(child, {
      isActive: child.props.name === active,
    })
  )
  // if (WrapperComponent) {
  //   return <WrapperComponent {...rest}>{newChildren}</WrapperComponent>
  // } else {
  //   return newChildren
  // }
}

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
