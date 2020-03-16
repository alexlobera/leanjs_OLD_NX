import React, { useState, useContext } from 'react'
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

export const TabList = React.memo(
  ({
    // active,
    // setActive,
    // onChange,
    children,
    sx = {},
    includeRowCol = true,
    ...rest
  }) => {
    // const compound = React.Children.map(children, child =>
    //   React.cloneElement(child, {
    //     isActive: child.props.name === active,
    //     onClick: child.props.name
    //       ? () => {
    //           onChange && onChange(child.props.name)
    //           setActive(child.props.name)
    //         }
    //       : undefined,
    //   })
    // )

    const ul = (
      <Ul
        sx={{
          p: 0,
          m: 0,
          mb: 4,
          ...sx,
        }}
        {...rest}
        box="ul"
      >
        {children}
      </Ul>
    )

    return includeRowCol ? (
      <Row>
        <Col {...rest} md={11}>
          {ul}
        </Col>
      </Row>
    ) : (
      ul
    )
  }
)

TabList.displayName = 'TabList'

const A = styled.a.attrs(props => ({ className: props.className }))`
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

export const TabItem = React.memo(
  ({
    // isActive,
    // onClick,
    name,
    component,
    className = 'courses training-curriculum-clicks', // todo remove this default
    ...props
  }) => {
    const { onChange, value } = useTabsContext()
    return (
      <li name={name}>
        <A
          role="button"
          isActive={name === value}
          name={name}
          {...props}
          onClick={e => {
            e.preventDefault()
            // onClick && onClick()
            onChange(name)
          }}
          className={className}
        />
      </li>
    )
  }
)

TabItem.displayName = 'TabItem'

// TODO REMOVE THIS
// export const TabContent = React.memo(props => <div {...props} />)

TabContent.displayName = 'TabContent'

// TODO RENAME TO TabPanel
// TODO ADD aria-labelledby
export const ContentItem = React.memo(({ name, ...rest }) => {
  const { value } = useTabsContext()

  return value === name ? <div role="tabpanel" {...rest} /> : null
})

//export const ContentItem = () => 'content item'
ContentItem.displayName = 'ContentItem'

const TabsContext = React.createContext()

export const useTabsContext = () => {
  const context = useContext(TabsContext)

  if (!context) {
    throw new Error(
      `Tab components such as TabList need a parent Tabs component in the component tree`
    )
  }

  return context
}

export const Tabs = ({
  value: valueProp, // TODO RENAME ACTIVE WITH VALUE
  defaultValue,
  onChange: onChangeProp,
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue || valueProp)

  const onChange = value => {
    onChangeProp && onChangeProp(value)
    if (!valueProp) {
      // TODO should we call it value instead of active?
      setValue(value)
    }
  }

  return (
    <TabsContext.Provider
      value={{
        onChange,
        value: valueProp || value,
      }}
      {...rest}
    />
  )
}

export default React.memo(Tabs)
